import React, {useState} from "react";
import { Text, View } from "react-native";
import * as icons from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StarRating from 'react-native-star-rating-widget';

const Science = () => {

  const [rating, setRating] = useState(0);

  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
       <StarRating
        rating={rating}
        onChange={setRating}
      />
    </View>
  );
};

export default Science;
