import React from "react";
import Social from "./social/Social";
import Login from "./login/Login";
import {Route} from "react-router";
import AuthRoute from "./AuthRoute";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <AuthRoute path="" component={Social}/>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}
