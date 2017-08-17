import React from "react";
import {logIn} from "../actions/creators";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import LoginService from "../services/LoginService";

import "./login.scss";

class Login extends React.Component {

    logIn(){
        let user = {name: this.input.value };
        LoginService.set(user);
        this.props.login(user);
    }

    render(){
        if(!this.props.isLoggedIn)
            return (
                <form className="login-window" onSubmit={ ()=> this.logIn() }>
                    <input type="text" ref={ e => this.input = e }/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            );
        else
            return <Redirect to="/"/>
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.loggedInUser
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: user => dispatch( logIn(user) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
