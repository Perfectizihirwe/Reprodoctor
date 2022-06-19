import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import Consult from "../screens/consult";
import Science from "../screens/Science";
import Profile from "../screens/Profile";
import * as icons from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Consult") {
            iconName = focused ? "chatbubbles" : "chatbubbles";
          } 
            else if (route.name === "Science") {
              iconName = focused ? "document" : "document";
          }
            else if (route.name === "Profile") {
              iconName = focused ? "person" : "person";
          }

          return (<icons.Ionicons name={iconName} size={size} color={color} />);
        },
        tabBarActiveTintColor: "#16278e",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Science"
        component={Science}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
