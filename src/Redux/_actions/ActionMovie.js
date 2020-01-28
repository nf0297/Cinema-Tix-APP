import axios from 'axios';

const Host = "https://cinema-tix-app.herokuapp.com/api/v1";

export const getAllMovie = () => {
    return {
        type: "GET_ALL_MOVIE",
        payload: axios.get(`${Host}/movies`)
    };
}

export const getMovieByGenre = (id) => {
    console.log(id);
    return {
        type: "GET_MOVIE_BY_GENRE",
        payload: axios.get(`${Host}/genre/`+ id +`/movies`)
    };
}

export const getMovieByID = (id) => {
    console.log(id);
    return {
        type: "GET_MOVIE_BY_ID",
        payload: axios.get(`${Host}/movie/`+id+`/data`)
    };
}