import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const allReducers = combineReducers({
    todoReducer,
})

export default allReducers;