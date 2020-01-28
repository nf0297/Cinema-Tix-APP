const initState = {
    movies: [],
    movieid: [],
    moviebygenre: []
}

const ReducerMovie = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "GET_ALL_MOVIE_FULFILLED":
            console.log("Get Movies!")
            return {
                ...state,
                movies: action.payload.data
            };
        case "GET_MOVIE_BY_ID_FULFILLED":
            console.log("Get Movie By ID")
            return {
                ...state,
                movieid: action.payload.data
            }
        case "GET_MOVIE_BY_GENRE_FULFILLED":
            console.log("Get Movie By Genre")
            return {
                ...state,
                moviebygenre: action.payload.data
            };
        default:
            return state;
    }
} 

export default ReducerMovie;