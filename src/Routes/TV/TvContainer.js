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
    
    render() {
        const { airingToday, popular, topRated, error, loading} =this.state;
        return <TvPresenter 
        airingToday={airingToday}
        popular={popular} 
        topRated={topRated}
        error={error}
        loading={loading} />
    }
}