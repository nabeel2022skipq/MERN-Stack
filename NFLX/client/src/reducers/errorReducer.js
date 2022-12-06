const initial_state = {
    msg: {},
    status: null,
    id: null
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "RETURN_ERRORS":
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                msg: null,
                status: null
            }
        default:
            return state
    }
}