import axios from "axios";

const api = axios.create(
    {
        baseURL : "https://api.themoviedb.org/3/",
        params : {
            api_key : "19ef4808bf86257c609bd5bb79ed2f59",
            language : "en_US"
        }
    }
);

export const movieApi= {
    nowPlaying: ()=> api.get("movie/now_playing"),
    upcoming: ()=>api.get("movie/upcoming"),
    popular: ()=>api.get("movie/popular"),
    topRated: ()=>api.get("movie/top_rated"),
    movieDatail: (id)=>api.get(`movie/${id}`, 
    { 
        params :{
            append_to_response : "videos"
        }
    }),
    search : (text) => api.get("search/movie", {
        params :{
            query : encodeURIComponent(`${text}`)
        }
    })
   
}

export const tvApi= {
    topRated: ()=> api.get("tv/top_rated"),
    airingToday: ()=>api.get("tv/airing_today"),
    popular: ()=>api.get("tv/popular"),
    showDatail: (id)=>api.get(`tv/${id}`, 
    { 
        params :{
            append_to_response : "videos"
        }
    }),
    search : (text) => api.get("search/tv", {
        params :{
            query : encodeURIComponent(`${text}`)
        }
    })
}



