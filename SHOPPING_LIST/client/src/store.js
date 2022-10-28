import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initial_state = {}
const middleWare = [thunk]

const store = createStore(rootReducer, initial_state, compose(
    applyMiddleware(...middleWare)
))

export default store