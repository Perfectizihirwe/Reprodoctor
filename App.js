import OnBoardScreen from './src/screens/onBoard';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/homeScreen/login';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='OnBoard'>
        <stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{ headerShown: false}}>
        </stack.Screen>
        <stack.Screen
        name="Login"
        component={Login}
        options={{ headerBackVisible: false}}>
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

