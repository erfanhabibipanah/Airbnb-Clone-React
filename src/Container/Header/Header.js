import React, { Component } from 'react';
import "./Header.css";
import logo  from "./../../Assets/Logo.png";
import Avatar from "@material-ui/core/Avatar/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import Globe from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as actionCreator from "../../Store/ActionCreators/index";
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/"><img src={logo} alt="LOGO" className="header__icon" /></Link>
                <div className="header__center">
                    <input placeholder="Search For Hotels.." />
                    <SearchIcon/>
                </div>
                <div style={{cursor: "pointer"}} className="header__right">
                    <p onClick={()=>{if(this.props.user){
                        this.props.history.push("/host your property&value=null");
                    }else{
                        this.props.history.push("/loginWithGoogle");
                    }}}>Become A host</p>
                    <Globe/>
                    <ExpandMoreIcon/>
                    <Avatar src={this.props.user && this.props.user.user.photoURL} alt="avatar" />
                    {this.props.user
                    ?
                    <React.Fragment><p className="user__name">Hii,<br/>{this.props.user.user.displayName}</p><Button onClick={()=>{this.props.logoutUser()}} className="auth" variant="outlined" >LogOut</Button></React.Fragment>
                    :
                    <Button onClick={()=>{this.props.history.push("/loginWithGoogle")}} className="auth" variant="outlined" >LogIn</Button>
                }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logoutUser: ()=>{dispatch(actionCreator.logoutUser())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));