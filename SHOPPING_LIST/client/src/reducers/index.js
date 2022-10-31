import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import ItemsReducer from "./ItemsReducer";


export default combineReducers({
    item: ItemsReducer,
    error: errorReducer,
    auth: authReducer
})