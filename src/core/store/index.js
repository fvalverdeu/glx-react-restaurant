import {combineReducers, createStore} from "redux";
import portalReducer from "./portal/reducer";

const reducers = combineReducers({
    portal: portalReducer,
    
});

const store = createStore(reducers);

export default store;
