import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {getUsersList} from "../../../actions/creators";

import "./users-list.scss";

class UsersList extends React.Component {

    constructor(props){
        super(props);

        this.props.getUsersList();
    }

    renderUser(user, i){
        return <li key={i}>
                    <NavLink exact activeStyle={ { color: "yellow" } } activeClassName="active" to={`/users/${user._id}`}>{ user.name }</NavLink>
                </li>
    }

    render(){
        if(this.props.isLoading)
            return <nav className="users-list">Loading...</nav>;

        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state){
    return {
        users: state.friends.usersList,
        isLoading: state.friends.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUsersList: () => dispatch( getUsersList() )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList));
