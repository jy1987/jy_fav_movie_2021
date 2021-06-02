import { tvApi } from "api";
import React from "react";
import TvPresenter from "./TvPresenter";


export default class extends React.Component {
    state = {
        topRated : null,
        airingToday : null,
        popular : null,
        error : null,
        loading : true
    };

    async componentDidMount(){
        try{
            const {data:{results : topRated}} = await tvApi.topRated()
            const {data:{results : airingToday}} = await tvApi.airingToday()
            const {data:{results : popular}} = await tvApi.popular()
            this.setState({
                topRated,
                airingToday,
                popular
            });
        }
        catch {
            this.setState ({
                error : "cant find tv contents"
            });
        }
        finally{
            this.setState({
                loading : false
            });
        }
 
    }
    
    render() {
        const { airingToday, popular, topRated, error, loading} =this.state;
        console.log(this.state);
        return <TvPresenter 
        airingToday={airingToday}
        popular={popular} 
        topRated={topRated}
        error={error}
        loading={loading} />
    }
}