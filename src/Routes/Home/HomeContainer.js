import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";


export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        topRated: null,
        error : null,
        loading : true
    };
    
    async componentDidMount(){
        try{
            const { data:{results : nowPlaying}} = await movieApi.nowPlaying();
            const { data:{results : upcoming}} = await movieApi.upcoming();
            const { data:{results : popular}} = await movieApi.popular();
            const { data:{results : topRated}} = await movieApi.topRated();
            // throw Error();
            this.setState({
                nowPlaying,
                upcoming,
                popular,
                topRated
            });
            //const ccc= await movieApi.nowPlaying();
            //console.log(ccc); //# json 어케 생겼는지 확인
           
        }
        catch{
            this.setState({
                error : "can't find movies"
            });

        }
        finally{
            this.setState({
                loading:false
            });
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, topRated, error, loading} =this.state;
        console.log(this.state);
        return <HomePresenter 
        nowPlaying={nowPlaying} 
        upcoming={upcoming} 
        popular={popular} 
        topRated={topRated}
        error={error}
        loading={loading} />
    }
}