import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as icons from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
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
            Create your account!
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <Text style={{ opacity: 0.4 }}>Do already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue" }}> Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              color: "#112447",
            }}
          >
            Username
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              marginHorizontal: 20,
            }}
          >
            <icons.FontAwesome
              name="user"
              size={25}
              color="gray"
              style={{ paddingTop: 11, paddingLeft: 15 }}
            />
            <TextInput
              placeholder="Kagabo K"
              onChangeInput1={onChangeInput1}
              Value={input1}
              keyboardType="default"
              style={{ outline: "none", paddingLeft: 20 }}
            />
          </View>
          <Text
            style={{
              color: "#112447",
              marginLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            Email
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <icons.MaterialCommunityIcons
              name="email"
              size={25}
              color="gray"
              style={{ paddingTop: 11, paddingLeft: 15 }}
            />
            <TextInput
              placeholder="kkagabo@gmail.com"
              onChangeInput1={onChangeInput2}
              Value={input2}
              keyboardType="default"
              style={{ outline: "none", paddingLeft: 20 }}
            />
          </View>
          <Text
            style={{
              color: "#112447",
              marginLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            Phone number
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <icons.Feather
              name="smartphone"
              size={25}
              color="gray"
              style={{ paddingTop: 11, paddingLeft: 15 }}
            />
            <TextInput
              placeholder="+(250) 783 309 196"
              onChangeInput1={onChangeInput2}
              Value={input2}
              keyboardType="phone-pad"
              style={{ outline: "none", paddingLeft: 20 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 5 }}>
          <Checkbox
            color="blue"
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              position: "relative",
              top: 5,
              fontSize: 18,
              paddingBottom: 10,
            }}
          >
            I accept the terms and privacy policy
          </Text>
        </View>
        <View style={{ marginHorizontal: 80, borderRadius: 50 }}>
          <Button
            title="Next"
            color="#0065ff"
            onPress={() => navigation.navigate("Verification")}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default SignUpScreen;
