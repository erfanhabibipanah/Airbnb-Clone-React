import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import "./Banner.css";
import { connect } from "react-redux";
const Banner = (props) => {
    const [showDates,setShowDates] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
    <Button onClick={()=>{setShowDates(!showDates)}} className="banner__search__button" variant="outlined"  >{showDates?"Hide":"Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination.</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant="outlined" onClick={()=>{if(props.user){
                    props.history.push("/exploreNearby")}else{
                        props.history.push("/loginWithGoogle")}
                    }} >Explore Nearby</Button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return{
        user: state.auth.user
    }
};

export default connect(mapStateToProps,null)(withRouter(Banner));
