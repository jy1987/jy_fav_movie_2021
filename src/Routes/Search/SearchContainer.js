import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";


export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "", // string 형식으로 받아오기 위해서 "" 씀 
        error : null,
        loading : false // 사용자가 찾기 전까지 반응 안하게 하기 위해서 false 로 둠
    };

    handleSubmit=()=> {
        const{searchTerm}=this.state;
        if (searchTerm!==""){
            this.searchByTerm();
        }
    }

    searchByTerm=async()=>{
        const {searchTerm} = this.state;
        this.setState({
            loading:true
        });
        try{
            const { data:{results:movieResults}}= await movieApi.search(searchTerm);
            const { data:{results:tvResults}}= await tvApi.search(searchTerm);
            this.setState=({
                movieResults,
                tvResults
            });
        }
        catch{
            this.setState({
                error : "cant find results"
            });
        }
        finally{
            this.setState({
                loading:false
            });
        }
    }

    
    render() {
        const { movieResults,
            tvResults,
            searchTerm,
            error,
            loading} =this.state;
        return <SearchPresenter 
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit} />
    }
}