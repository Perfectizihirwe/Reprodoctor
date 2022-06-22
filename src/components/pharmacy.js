import React, {useState} from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import * as icons from "@expo/vector-icons"

const Pharmacy = (props) => {
  const { title, image, price } = props;
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.containerStyles}>
        {image}
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <View style={{flexDirection:"row", alignItems: 'center'}}>
      <Text style={{flex: 0.6, fontSize: 13}}>{price}</Text>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <icons.Entypo name="shopping-cart" size={24} color="#16278e" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pharmacy;

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
    fontSize: 12,
    fontWeight: "700",
  },
});
