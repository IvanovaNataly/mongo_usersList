import {combineReducers} from "redux";
import {ADD_USER, GET_USERS_LIST_RESPONSE, GET_USERS_LIST_REQUEST, REMOVE_USER} from "../actions";

import selectedUserReducer from "./selectedUserReducer";

export function usersListReducer(state = [], action){
    switch (action.type){
        case ADD_USER:
            return [...state, action.user];
        case REMOVE_USER:
            return state.filter(user => user != action.user);
        case GET_USERS_LIST_RESPONSE:
            return [...action.users];
    }

    return state;
}

export function isLoadingReducer(state = false, action){

    switch (action.type){
        case GET_USERS_LIST_RESPONSE:
            return false;
        case GET_USERS_LIST_REQUEST:
            return true;
    }

    return state;
}


export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer,
    isLoading: isLoadingReducer
});
