import axios from "axios"
import { returnErrors } from "./errorActions";
const api = axios.create({
    baseURL: "http://localhost:5000/",

});

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading())
    api.get('/api/posts').then(res => dispatch({
        type: "GET_POSTS",
        payload: res.data
    }))
}
export const insertPost = (newpost) => dispatch => {
    api.post('/api/posts', newpost).then(res => dispatch({
        type: "ADD_POST",
        payload: newpost
    }))
}
export const removePost = (newpost) => dispatch => {

    let config = {
        headers: {
            Authorization: "authToken",
        },
        data: newpost,
    }
    api.delete('/api/posts', config).then(res => dispatch({
        type: "DEL_POST",
        payload: newpost
    }))
}

export const updatePost = (oldpost) => dispatch => {
    api.put('/api/posts', oldpost).then(res => dispatch({
        type: "UPDATE_POST",
        payload: oldpost

    })).catch(err => {
        dispatch(returnErrors(err.response.msg, err.response.status))

    })
}


export const setPostsLoading = () => {
    return {
        type: "SET_POSTS_LOADING"
    }
}
