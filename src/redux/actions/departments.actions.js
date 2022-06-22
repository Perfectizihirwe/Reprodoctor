import * as icons from "@expo/vector-icons" 

const value = [
    {
      id: "1",
      title: "Pediatrics",
      icon: (
        <icons.MaterialCommunityIcons
          name="account-child-circle"
          size={50}
          color="#16278e"
        />
      ),
    },
    {
      id: "2",
      title: "Dental",
      icon: <icons.FontAwesome5 name="tooth" size={40} color="#16278e" />,
    },
    {
      id: "3",
      title: "Lungs",
      icon: <icons.FontAwesome5 name="lungs" size={40} color="#16278e" />,
    },
    {
      id: "4",
      title: "Heart",
      icon: <icons.AntDesign name="heart" size={40} color="#16278e" />,
    },
  ];



export const setDepartment = () => {
    return (dispatch) => {
        dispatch({ type: "SET DEPARTMENT", payload: value})
        
    };

};
