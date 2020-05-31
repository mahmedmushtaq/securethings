import {combineReducers} from "redux";
import passwordSettings from "./reducers/passwordSettings";

const root =  combineReducers({
    passwordSettings,
});

export default root;

