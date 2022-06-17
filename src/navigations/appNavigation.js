import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../screens/onBoard";
import Login from "../Authentication/login";
import SignUpScreen from "../Authentication/signup";
import VerificationScreen from "../Authentication/verification";
import HomeScreen from "../screens/realApp/Homescreen";

const stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator initialRouteName="OnBoard">
      <stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
    </stack.Navigator>
  );
};
