import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../screens/onBoard";
import Login from "../screens/Authentication/login";
import SignUpScreen from "../screens/Authentication/signup";
import VerificationScreen from "../screens/Authentication/verification";
import HomeScreen from "../screens/home";
import MainNavigation from "./mainNavigator";

const stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator initialRouteName="OnBoard">
      <stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
      name="MainNavigator"
      component={MainNavigation} 
      options={{ headerShown: false }}
      />
      
    </stack.Navigator>
  );
};
