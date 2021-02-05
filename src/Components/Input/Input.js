import React from 'react';

import './Input.css'
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const Input = (props)=>{
    let inputelement = null;
    let applyclasses = ["Inputelement"];
    if(props.haveChangedOnce && props.conditions && props.isValid===false){
        applyclasses.push("Invalid");
    }
    if(props.haveChangedOnce && props.conditions && props.isValid===true ){
        applyclasses.push("Valid");
    }
    switch(props.elementType){
        case ('input'):
            inputelement = <input onChange={(e)=>{props.onChange(e.target.value,props.id)}} className={applyclasses.join(" ")} {...props.elementConfig} value={props.elementValue}/>
            break;
        case ('textarea'):
            inputelement = <textarea  onChange={(e)=>{props.onChange(e.target.value,props.id)}} className={applyclasses.join(" ")} {...props.elementConfig} value={props.elementValue}/>
            break;
        case ('select'):
            inputelement = (
                <select onChange={(e)=>{props.onChange(e.target.value,props.id)}} className={applyclasses.join(" ")} value={props.elementValue}>
                    {props.elementConfig.options.map(ele=>{
                        return (<option key={ele.displayValue} value={ele.value}>{ele.displayValue}</option>);
                    })}
                </select>
            )
            break;
        case ("file"):
            inputelement = <input  type="file" onChange={(e)=>{ props.onChange([...e.target.files],props.id)}} className={applyclasses.join(" ")}  {...props.elementConfig} />
            break;
        default:
            inputelement = <input onChange={(e)=>{props.onChange(e.target.value,props.id)}} className={applyclasses.join(" ")} {...props.elementConfig} value={props.elementValue}/>
            break;
    }
    return(
        <div className={"Input"}>
            <label className={"Label"}><div style={{display: "flex",alignItems: "center",alignSelf: props.elementType==="textarea"&&"flex-start"}} >{props.label}</div>{props.elementConfig.type==="checkbox"?props.elementValue===true?<CheckCircleOutlineIcon style={{color: "green"}} />:<HighlightOffIcon style={{color: "red"}}/>:null}
            {inputelement}
            </label>
        </div>
    );
}

export default Input;