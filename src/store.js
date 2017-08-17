import {createStore, applyMiddleware} from "redux";
import appReducers from "./reducers";
import LoginService from "./services/LoginService";

import { composeWithDevTools } from 'redux-devtools-extension';


import thunk from "redux-thunk";

const state = {
    loggedInUser: LoginService.get(),
    friends: {
        isLoading: false,
        usersList: [],
        selectedUser: {
            details: null,
            posts: null
        }
    }
};

let middlewares = applyMiddleware(thunk);

export default createStore(
    appReducers,
    state,
    composeWithDevTools(middlewares)
);
