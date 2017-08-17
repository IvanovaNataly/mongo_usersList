import React from "react";
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";
import {connect} from "react-redux";
import {Route} from "react-router";

import '../../main.scss';

export default class Users extends React.Component {

    render(){
        return (<div>
                    <UsersList/>
                    <Route path="/users/:id" component={UserPage}/>
                </div>)
    }
}
