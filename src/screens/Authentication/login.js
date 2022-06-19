import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as icons from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

const Login = ({ navigation }) => {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff"}}>
      <SafeAreaView></SafeAreaView>
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: "#112447",
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginTop: 50,
            }}
          >
            Welcome back!
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <Text style={{ opacity: 0.4 }}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "blue", opacity: 0.5 }}> Create it!</Text>
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
            Phone number
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
            <icons.Feather
              name="smartphone"
              size={25}
              color="gray"
              style={{ paddingTop: 11, paddingLeft: 15 }}
            />
            <TextInput
              placeholder="Enter mobile number"
              onChangeInput1={onChangeInput1}
              Value={input1}
              keyboardType="phone-pad"
              style={{ outline: "none", paddingLeft: 5 }}
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
            Verification Code
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
            <TextInput
              placeholder="Enter verification code"
              onChangeInput1={onChangeInput2}
              Value={input2}
              keyboardType="phone-pad"
              style={{ outline: "none", paddingLeft: 20 }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  color: "blue",
                  position: "relative",
                  top: 15,
                  left: 90,
                }}
              >
                Send OTP
              </Text>
            </TouchableOpacity>
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
          <Text style={{ position: "relative", top: 5, fontSize: 18 }}>
            Remember me
          </Text>
        </View>
        <View style={{ marginHorizontal: 80, borderRadius: 50 }}>
          <Button
            title="Login"
            color="#0065ff"
            onPress={() => navigation.navigate("MainNavigator")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 100,
            paddingTop: 40,
          }}
        >
          <Text style={{ color: "gray" }}>Forgot Password ?</Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}> Reset</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{ marginHorizontal: 120, color: "gray", marginVertical: 20 }}
        >
          ---- Or login with ----
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            height: 40,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              maxWidth: 200,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <icons.AntDesign name="facebook-square" size={24} color="grey" />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              maxWidth: 200,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <icons.AntDesign name="google" size={24} color="grey" />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Login;
