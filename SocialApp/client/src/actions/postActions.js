import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:5000/api/posts",

});

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading())
    api.get('/').then(res => dispatch({
        type: "GET_POSTS",
        payload: res.data
    }))
}
export const insertPost = (newpost) => dispatch => {
    api.post('/', newpost).then(res => dispatch({
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
    api.delete('/', config).then(res => dispatch({
        type: "DEL_POST",
        payload: newpost
    }))
}


export const setPostsLoading = () => {
    return {
        type: "SET_POSTS_LOADING"
    }
}