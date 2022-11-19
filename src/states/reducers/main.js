import { combineReducers } from "redux";
import loginReducers from "./loginReducers";
import passwordReducers from "./passwordReducers";
const reducers = combineReducers({
    passwordreducers : passwordReducers,
    loginReducers    : loginReducers 
});

export default reducers;

