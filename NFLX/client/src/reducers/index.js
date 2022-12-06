import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import myListReducer from "./myListReducer";

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    list: myListReducer
})