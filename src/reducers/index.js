import { combineReducers } from "redux";
import simpleReducer from "./SimpleReducer";
import todoReducer from "./TodoReducer";

export default combineReducers({
    simpleReducer,
    todoReducer
});
