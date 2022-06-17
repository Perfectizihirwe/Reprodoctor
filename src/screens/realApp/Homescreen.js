import React from "react";
import { Text } from "react-native";
import * as icons from "@expo/vector-icons"

const HomeScreen = () =>{
    return(
        <View style={{flexDirection: 'row'}}>
            <icons.MaterialIcons name="construction" size={40} color="#112447" />
            <Text style={{fontSize: 40}}>Under Construction</Text>
        </View>
    );
}

export default HomeScreen;