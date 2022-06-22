import { ActionSheetIOS } from "react-native";
import { setDepartment } from "../actions";


const initialState = {
    depart: [],
  };
  
  export default (state = initialState, action) => {

    switch(action.type) {
        case "SET DEPARTMENT":
            return {                
                ...state,
                depart: action.payload,
            };
        default: return state;
    };
   
  };