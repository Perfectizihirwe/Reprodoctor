import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../screens/onBoard";
import Login from "../Authentication/login";


const stack = createStackNavigator();

export const AppNavigator = () => {
    return(
        <stack.Navigator initialRouteName="OnBoard" >
            <stack.Screen name="OnBoard" component={OnBoardScreen} options= {{headerShown: false}}>
            </stack.Screen>
            <stack.Screen name="Login" component={Login} options= {{headerShown: false}}>
            </stack.Screen>
        </stack.Navigator>
    );
} 
