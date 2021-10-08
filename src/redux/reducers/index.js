import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";


export const reducers = combineReducers({
    loginReducer : loginReducer
})

export default reducers;