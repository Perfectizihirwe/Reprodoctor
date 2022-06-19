import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating-widget";
import * as icons from '@expo/vector-icons'

const Pharmacy = (props) => {
  const { title, image, price, cart } = props;
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.containerStyles}>
        {image}
        <Text style={styles.title}>{title}</Text>
        <StarRating
        rating={rating}
        onChange={setRating}
        starSize={15}
        starStyle={{
            width: 9
        }}
      />
      <View style={{flexDirection:"row", alignContent: 'center'}}>
      <Text style={{flex: 0.6, fontSize: 13}}>{price}</Text>
      <TouchableOpacity style={{}}>
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
    backgroundColor: "#a8adad",
    borderRadius: 15,
    opacity: 0.6,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
  },
});
