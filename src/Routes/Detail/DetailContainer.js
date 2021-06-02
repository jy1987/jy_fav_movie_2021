import { tvApi, movieApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";


export default class extends React.Component {
    state = {
        result : null,
        error : null,
        loading : true
    };

    async componentDidMount(){
        const {
            match : {
                params :{id}
            },
            history : {push},
            location : {pathname}
        } = this.props;
        const isMovie = pathname.includes("/movie/");
        const parsedId= parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        
    try{
        if (isMovie) {
            const {data: result} = await movieApi.movieDatail(parsedId);
            this.setState=({
                result,
            });
        } else {
            const {data: result} = await tvApi.showDatail(parsedId);
            this.setState=({
                result,
            });
        }
        const bbb= await movieApi.movieDatail(parsedId);
        console.log(bbb);
    }
    catch {
        this.setState=({
            error : "cant find anything"
        });
    }
    finally{
        this.setState=({
            loading:false
        });
    }
}

    render() 
        { //console.log(this.props); //react-router-dom 의 withrouter가 route의 정보를 제공해준다.
        const { result,
            error,
            loading} =this.state;
        console.log(this.state);
        return <DetailPresenter 
        result={result}
        error={error}
        loading={loading} />
    }
}