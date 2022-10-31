const initial_state = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    isloading: false
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "USER_LOADING":
            return {
                ...state,
                isloading: true
            }
        case "USER_LOADED":
            return {
                ...state,
                isloading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isloading: false,
                user: action.payload.user
            }
        case "REGISTER_FAIL":
        case "AUTH_FAIL":
        case "LOGOUT_SUCCESS":
        case "LOGIN_FAIL":
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                isloading: false
            }
        default:
            return state
    }
}