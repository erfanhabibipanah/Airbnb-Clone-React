import React, { Component } from 'react';
import "./Login.css";
import { connect } from "react-redux";
import Logo from "./../../Assets/LoginLogo.png";
import { Button } from '@material-ui/core';

import * as actionCreators from "../../Store/ActionCreators/index";
class Login extends Component {
    render() {
        return (
            <div className="login__home">
                <div className="login">
                <img className="login__image"  src={Logo} alt="Logo" />
                <h1>Welcome To AIRBNB Please Login To Book ,</h1>
                <Button variant="outlined" onClick={this.props.loginUser} className="login__button" >Login With Google</Button>
            </div>
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch)=>{
    return{
        loginUser: ()=>{dispatch(actionCreators.loginWithGoogle())}
    }
}

export default connect(null,mapDispatchToProps)(Login);