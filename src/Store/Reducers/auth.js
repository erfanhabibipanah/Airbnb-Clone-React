import * as actionTypes from "../actionTypes";

const initialState = {
    user: null,
    err: null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOGINUSERSUCCESS:
            return{
                ...state,
                user: action.user,
                err: null
            }
        case actionTypes.LOGINUSERFAILED:
            return{
                ...state,
                user: null,
                err: action.err
            }
        case actionTypes.LOGOUTUSER:
            return{
                ...state,
                user: null,
                err: null
            }
        default:
            return state
    }
}

export default authReducer;