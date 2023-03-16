import axios from "axios"
import { returnError } from "./errorActions";
const api = axios.create({
    baseURL: "https://ntflx.herokuapp.com/api/users"
});

export const registerUser = (user) => async dispatch => {

    api.post('/', user).then(result => dispatch({
        type: "REGISTER_SUCCESS",
        payload: result.data
    }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: "REGISTER_FAIL",
            })
        })
}

export const loginUser = (user) => async dispatch => {
    api.post('/auth', user).then(result => dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data
    }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                type: "LOGIN_FAIL",
            })
        })

}

export const logoutUser = () => dispatch => {
    dispatch({
        type: "LOGOUT_SUCCESS"
    })
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: "USER_LOADING"
    })
    api.get('/auth/user', tokenConfig(getState)).then(result => dispatch({
        type: "USER_LOADED",
        payload: result.data
    }))
        .catch(err => {
            console.log(err)
            dispatch(returnError(err.response.data, err.response.status, 'AUTH_FAIL'))
            dispatch({
                type: "AUTH_FAIL"
            })
        })

}

export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    // If token, add to headers
    if (token) {

    }

    return config;
};