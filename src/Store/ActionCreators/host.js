import * as actionTypes from "../actionTypes";

export const changeinput = (val,id)=>{
    return{
        type: actionTypes.CHANGEINPUTHANDLER,
        val,
        id
    }
}

export const resetInput = ()=>{
    return{
        type: actionTypes.RESERINPUTHANDLER
    }
}