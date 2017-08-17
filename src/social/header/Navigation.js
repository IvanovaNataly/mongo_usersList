import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logOut} from "../../actions/creators";
import LoginService from "../../services/LoginService";

import "./navigation.scss";

class Navigation extends React.Component {

    logout(){
        LoginService.set(null);
        this.props.logout();
    }

    render(){
        return (<header className="navigation">
                    <span>Hello, {this.props.user.name}</span>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                    <button onClick={ ()=> this.logout() }>Log out</button>
                </header>);
    }
}

function mapStateToProps(state){
    return {
        user: state.loggedInUser
    }
}

function mapsDispatchToProps(dispatch){
    return {
        logout: ()=> dispatch( logOut() )
    }
}

let connected = connect(mapStateToProps, mapsDispatchToProps)(Navigation);

export default withRouter(connected);
