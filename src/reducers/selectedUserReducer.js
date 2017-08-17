import {combineReducers} from "redux";
import {REMOVE_USER, GET_USER_RESPONSE, GET_USER_REQUEST} from "../actions";


function detailsReducer(state = null, action){

    switch (action.type){
        case GET_USER_RESPONSE:
            return action.user;
        case REMOVE_USER:
            return state == action.user? null : state;
    }

    return state;
}

function postsReducer(state = null, action){

    switch (action.type){
        case GET_USER_RESPONSE:
            return action.posts;
    }

    return state;
}

function isLoadingReducer(state = false, action){

    switch (action.type){
        case GET_USER_REQUEST: return true;
        case GET_USER_RESPONSE: return false;
    }

    return state;
}

export default combineReducers({
    details: detailsReducer,
    posts: postsReducer,
    isLoading: isLoadingReducer
})
