import {combineReducers} from "redux";
import friendsReducers from "./friendsReducer";
import loggedInUserReducer from "./loggedInUserReducer";

export default combineReducers({
    friends: friendsReducers,
    loggedInUser: loggedInUserReducer
});
