import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import portalReducer from "./portal/reducer";

const reducers = combineReducers({
    portal: portalReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
