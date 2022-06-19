import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const VerificationScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView></SafeAreaView>
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: "#112447",
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginTop: 90,
            }}
          >
            Enter Verification Code
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <Text style={{ opacity: 0.4 }}>
              We texted you a code to verify your phone number.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default VerificationScreen;
