const initial_state = {
    items: [],
    isloading: false
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload,
                isloading: false
            }
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "DEL_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.product !== action.payload.product)
            }
        case "UPDATE_ITEM":

            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product === action.payload.product) {
                    state.items[i].product = action.payload.updateproduct;
                    break; //Stop this loop, we found it!
                }

            }
            return {
                ...state,
                items: state.items
            }

        case "GET_ITEMS_LOADING":
            return {
                ...state,
                isloading: true
            }
        default:
            return state
    }

}