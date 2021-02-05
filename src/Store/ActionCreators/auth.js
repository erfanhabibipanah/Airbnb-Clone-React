import * as actionTypes from "../actionTypes";
import { auth, provider } from "../../Firebase/firebase";
const loginSuccess = (user)=>{
    return{
        type: actionTypes.LOGINUSERSUCCESS,
        user
    }
};

const loginFailed = (err)=>{
    return{
        type: actionTypes.LOGINUSERFAILED,
        err: err.message
    }
}

export const loginWithGoogle = ()=>{
    return dispatch=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            dispatch(loginSuccess(res));
        })
        .catch(err=>{
            dispatch(loginFailed(err));
            alert(err.message+"Please Try Again!");
        })
    }
};

export const logoutUser = ()=>{
    return{
        type: actionTypes.LOGOUTUSER
    }
}