const initial_state = {
    favourites: [],
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "GET_LIST":
            return {
                ...state,
                favourites: action.payload.myFavouritesList
            }
        case "ADDTO_LIST":
            return {
                ...state,
                favourites: [action.payload.myFavouritesList[0], ...state.favourites]
            }

        case "REMOVEFROM_LIST":
            return {
                ...state,
                favourites: state.favourites.filter(m => m.id !== action.payload.myFavouritesList[0].id)
            }

        default:
            return state
    }

}