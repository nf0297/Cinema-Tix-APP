const initState = {
    cinemas: [],
    cinemabyid: []
}

const ReducerMovie = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "GET_ALL_CINEMA_FULFILLED":
            console.log("Get Cinema!")
            return {
                ...state,
                cinemas: action.payload.data
            };
        case "GET_CINEMA_BY_ID_FULFILLED":
            console.log("Get Movie By ID")
            return {
                ...state,
                cinemabyid: action.payload.data
            };
        default:
            return state;
    }
} 

export default ReducerMovie;