import React from "react";
import { Text, View } from "react-native";
import * as icons from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView></SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: 'center', alignContent: 'center'}}>
        <Text style={{ fontSize: 40 }}>Profile page</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default Profile;
