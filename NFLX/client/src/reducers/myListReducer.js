const initial_state = {
    favourites: [],
    firstRender: true
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "GET_LIST":
            return {
                ...state,
                favourites: action.payload
            }
        case "ADDTO_LIST":
            let doc = state.favourites.filter(l => l.email === action.payload.email)
            if (doc.length > 0) {
                let myFavsListIndex = state.favourites.indexOf(doc[0])
                state.favourites[myFavsListIndex].myFavouritesList.push(action.payload.myFavouritesList[0])
            }
            else {
                state.favourites.push(action.payload)
            }
            return {
                ...state,
                favourites: state.favourites
            }

        case "REMOVEFROM_LIST":
            let docs = state.favourites.filter(l => l.email === action.payload.email)
            if (docs.length > 0) {
                let FavsListIndex = state.favourites.indexOf(docs[0])
                let idx = state.favourites[FavsListIndex].myFavouritesList.findIndex(x => x._ID === action.payload.myFavouritesList[0]._ID)
                state.favourites[FavsListIndex].myFavouritesList.splice(idx, 1)
            }
            return {
                ...state,
                favourites: state.favourites
            }

        case "RENDERED":
            return {
                ...state,
                firstRender: false

            }

        default:
            return state
    }

}