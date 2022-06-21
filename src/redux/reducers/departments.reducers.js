
const initialDepartment = {
    department: [],
  };
  
  export default (state = initialDepartment, action) => {

    switch(action.types) {
        case "SET DEPARTMENT":
            return {
                ...state,
                department: action.payload,
            }
        default: return state;
    }
   
  }