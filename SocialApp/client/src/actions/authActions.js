import axios from "axios"
import { returnError, returnErrors } from "./errorActions";
const api = axios.create({
    // baseURL: "http://localhost:5000/api/users",
    header: {
        "Access-Control-Allow-Origin": "*"
    },
});

export const registerUser = (user) => async dispatch => {

    api.post('/api/users', user).then(result => dispatch({
        type: "REGISTER_SUCCESS",
        payload: result.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: "REGISTER_FAIL",
            })
        })
}

export const loginUser = (user) => async dispatch => {
    api.post('api/users/auth', user).then(result => dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
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
    const token = getState().auth.token;
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    console.log(config)
    api.get('api/users/auth/user', config).then(result => dispatch({
        type: "USER_LOADED",
        payload: result.data
    }))
        .catch(err => {

            dispatch(returnErrors(err.response.data, err.response.status, 'AUTH_FAIL'))
            dispatch({
                type: "AUTH_FAIL"
            })
        })

}

// export const tokenConfig = (getState) => {
//     // Get token from localstorage
//     const token = getState().auth.token;

//     // Headers
//     const config = {
//         headers: {
//             'Content-type': 'application/json'
//         }
//     };

//     // If token, add to headers
//     if (token) {
//         config.headers['x-auth-token'] = token;
//     }

//     return config;
// };