import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Department = (props) => {
  const { title, icon } = props;

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

export default Department;

const styles = StyleSheet.create({
  containerStyles: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 150,
    backgroundColor: "#a8adad",
    borderRadius: 15,
    opacity: 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
