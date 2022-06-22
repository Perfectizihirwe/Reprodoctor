import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as icons from "@expo/vector-icons"

const DepartmentComponent = (props) => {

  const {icon, title} = props;

  const onHandlePress = () => {
    alert(title);
  };
  
  return (
    <TouchableOpacity onPress={()=>{onHandlePress()}} style={styles.containerStyles}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DepartmentComponent;

const styles = StyleSheet.create({
  containerStyles: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
