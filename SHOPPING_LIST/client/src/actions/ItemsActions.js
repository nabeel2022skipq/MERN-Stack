import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:5000/api/items",

});

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    api.get('/').then(result => dispatch({
        type: "GET_ITEMS",
        payload: result.data
    }))
}

export const insertItem = (item) => dispatch => {
    api.post('/', item).then(res => dispatch({
        type: "ADD_ITEM",
        payload: item
    }))
}

export const delItem = (item) => async dispatch => {
    let config = {
        headers: {
            Authorization: "authToken",
        },
        data: item,
    };
    await api.delete('/', config).then(result => dispatch({
        type: "DEL_ITEM",
        payload: item
    }))

}

export const updItem = (item) => async dispatch => {
    await api.put('/', item).then(result => dispatch({
        type: "UPDATE_ITEM",
        payload: item
    }))
}

export const setItemsLoading = () => {
    return {
        type: "GET_ITEMS_LOADING"
    }
}