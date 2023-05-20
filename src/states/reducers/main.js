import { combineReducers } from "redux";
import loginReducers from "./loginReducers";
import passwordReducers from "./passwordReducers";
import loginwithoutOrder from "./loginwithoutOrder";
const reducers = combineReducers({
    passwordreducers : passwordReducers,
    loginReducers    : loginReducers,
    loginwithoutOrder : loginwithoutOrder
});

export default reducers;

