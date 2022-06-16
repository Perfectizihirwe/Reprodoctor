import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SafeAreaProvider } from "react-native-safe-area-context";

const OnBoardScreen = ({ navigation }) => {
  const RenderItem = ({ item }) => {
    return (
      <SafeAreaProvider
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
          backgroundColor: 'white',
        }}
      >
        <ImageBackground style={styles.introImageStyle} source={item.image}>
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 300,
            height: 70,
            width: 70,
            backgroundColor: '#d9e8ff',
            borderRadius: 50,
            justifyContent: 'center',
            alignContent: 'center',

            }}>
              <Text style={{
                flex: 1,
                position: "relative",
                top: 22,
                left: 18,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#2c7cff',

              }}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </ImageBackground>
      </SafeAreaProvider>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={() => navigation.navigate("Login")}
        showSkipButton={false}
        showPrevButton={false}
        showNextButton={false}
        onSkip={() => navigation.navigate("Login")}
        dotStyle={{ width: 20, backgroundColor: "#2d6bad" }}
        activeDotStyle={{ width: 20, backgroundColor: "white" }}
      />
    </>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    flex: 1,
    width: 400,
    height: 750,
    marginTop: 60,
  },
  introTitleStyle: {
    marginTop: 30,
    marginHorizontal: 20,
    color: '#112447',
    fontSize: 30,
    fontWeight: "bold",
  },
  introTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    color: "#7d889b",
    marginTop: 5,
    opacity: 1,
  },
  view1text1: {
    paddingLeft: 30,
    paddingTop: 5,
    fontSize: 35,
    fontWeight: "bold",
  },

  view1text2: {
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: "normal",
  },

  inputbox: {
    flex: 1,
    borderColor: "#000",
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 0.5,
  },

  view3: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  view31: {
    flex: 1,
    maxWidth: 100,
    borderRadius: 20,
    height: 150,
    backgroundColor: "red",
  },
  view32: {
    flex: 1,
    maxWidth: 100,
    borderRadius: 20,
    flexDirection: "row",
    height: 150,
    backgroundColor: "red",
  },
  view33: {
    flex: 1,
    maxWidth: 100,
    borderRadius: 20,
    flexDirection: "row",
    height: 150,
    backgroundColor: "red",
  },
  butt1: {
    maxWidth: "100",
  },
});

const slides = [
  {
    key: "s1",
    text: "Online consultation and drug purchase platform",
    title: "Welcome!",
    image: require("../../../assets/slide1.png"),
  },
  {
    key: "s2",
    title: "Excellent service!",
    text: "We promise you'll live with a smile on your face",
    image: require("../../../assets/slide2.png"),
  },
  {
    key: "s3",
    title: "Large inventory",
    text: "We got all your medications in one place",
    image: require("../../../assets/slide3.png"),
  },
];
