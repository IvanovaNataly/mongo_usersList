import React from "react";
import {Route, Redirect, withRouter} from "react-router";
import {connect} from "react-redux";

class AuthRoute extends React.Component {

    render(){
        if(this.props.isLoggedIn)
            return <Route
                    path={this.props.path}
                    component={this.props.component}/>;
        else
            return <Redirect to="/login"/>;
    }

}


function mapStateToProps(state){
    return {
        isLoggedIn: state.loggedInUser
    }
}

let connected = connect(mapStateToProps, null)(AuthRoute);

export default withRouter(connected);
