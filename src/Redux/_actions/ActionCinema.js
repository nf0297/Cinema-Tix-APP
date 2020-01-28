import axios from 'axios';

const Host = "https://cinema-tix-app.herokuapp.com/api/v1";

export const getAllCinema = () => {
    return {
        type: "GET_ALL_CINEMA",
        payload: axios.get(`${Host}/cinemas`)
    };
}

export const getCinemaByID = (id) => {
    console.log(id);
    return {
        type: "GET_CINEMA_BY_ID",
        payload: axios.get(`${Host}/cinema/`+id+`/data`)
    };
}