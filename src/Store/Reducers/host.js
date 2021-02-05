import React from "react";

import * as actionTypes from "../actionTypes";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";


const initialState = {
  hotelInformation: {
    title: {
        label: "Hotel",
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Make it Catchy!!",
        maxLength: 30
      },
      elementValue: "",
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    description: {
        label: "Facilities",
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "Describe your place & facilities!!",
        maxLength: 400,
        minLength: 100
      },
      elementValue: "",
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    onebhk: {
        label: (<p>1 Room</p>),
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        placeholder: "",
      },
      elementValue: false,
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    twobhk: {
        label: (<p>2 Room</p>),
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        placeholder: "",
      },
      elementValue: false,
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    threebhk: {
        label: (<p>3 Room</p>),
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        placeholder: "",
      },
      elementValue: false,
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    price: {
        label: "Price(Day/$) ",
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "0",
      },
      elementValue: 0,
      conditions: {
        required: true,
      },
      isValid: false,
      haveChangedOnce: false,
    },
    image: {
    label: (<React.Fragment><p style={{color: "#f77",marginRight: "1rem"}}>Add Images (0/4)</p><AddToPhotosIcon style={{color: "#ff7779"}} /></React.Fragment>),
      elementType: "file",
      elementConfig: {
        type: "file",
        multiple: true
      },
      elementValue: [],
      conditions: {
        min: 1,
        max: 4,
      },
      isValid: false,
      haveChangedOnce: false,
    },
  },
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.CHANGEINPUTHANDLER:
          const newState = {...state};
          if(action.id==="image"){
            newState.hotelInformation[action.id].elementValue = action.val.filter(ele=>(ele.name.endsWith(".jpg")||ele.name.endsWith(".jpeg")||ele.name.endsWith(".png")||ele.name.endsWith(".gif")||ele.name.endsWith(".avif"))).splice(0,4);
          }else if(action.id!=="onebhk" &&
            action.id!=="twobhk"&&
            action.id!=="threebhk"){
            newState.hotelInformation[action.id].elementValue = action.val;
          }else{
            newState.hotelInformation[action.id].elementValue = !(newState.hotelInformation[action.id].elementValue);
          }
          
          return{
              ...state,
              hotelInformation: {...newState.hotelInformation}
          };
        case actionTypes.RESERINPUTHANDLER:
            return{
                ...state,
                hotelInformation: {
                  title: {
                      label: "Hotel",
                    elementType: "input",
                    elementConfig: {
                      type: "text",
                      placeholder: "Make it Catchy!!",
                      maxLength: 30
                    },
                    elementValue: "",
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  description: {
                      label: "Facilities",
                    elementType: "textarea",
                    elementConfig: {
                      type: "text",
                      placeholder: "Describe your place & facilities!!",
                      maxLength: 400,
                      minLength: 100
                    },
                    elementValue: "",
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  onebhk: {
                      label: (<p>1 Room</p>),
                    elementType: "input",
                    elementConfig: {
                      type: "checkbox",
                      placeholder: "",
                    },
                    elementValue: false,
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  twobhk: {
                      label: (<p>2 Room</p>),
                    elementType: "input",
                    elementConfig: {
                      type: "checkbox",
                      placeholder: "",
                    },
                    elementValue: false,
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  threebhk: {
                      label: (<p>3 Room</p>),
                    elementType: "input",
                    elementConfig: {
                      type: "checkbox",
                      placeholder: "",
                    },
                    elementValue: false,
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  price: {
                      label: "Price(Day/$) ",
                    elementType: "input",
                    elementConfig: {
                      type: "number",
                      placeholder: "0",
                    },
                    elementValue: 0,
                    conditions: {
                      required: true,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                  image: {
                  label: (<React.Fragment><p style={{color: "#f77",marginRight: "1rem"}}>Add Images (0/4)</p><AddToPhotosIcon style={{color: "#ff7779"}} /></React.Fragment>),
                    elementType: "file",
                    elementConfig: {
                      type: "file",
                      multiple: true
                    },
                    elementValue: [],
                    conditions: {
                      min: 1,
                      max: 4,
                    },
                    isValid: false,
                    haveChangedOnce: false,
                  },
                }
            }
    default:
      return state;
  }
};

export default hostReducer;
