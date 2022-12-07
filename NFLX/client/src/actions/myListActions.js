import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:5000/api/list"
});

export const getFavourites = () => dispatch => {
    api.get("/").then(result => dispatch({
        type: "GET_LIST",
        payload: result.data
    }))
}

export const AddToFavourites = (item) => dispatch => {
    api.post("/", item).then(result => dispatch({
        type: "ADDTO_LIST",
        payload: item
    }))
}

export const RemoveFromFavourites = (item) => dispatch => {
    api.put("/", item).then(result => dispatch({
        type: "REMOVEFROM_LIST",
        payload: item
    }))
}

export const toggleFirstRender = () => {
    return {
        type: "RENDERED"
    }
}