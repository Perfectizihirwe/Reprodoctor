import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./appNavigation";

function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
