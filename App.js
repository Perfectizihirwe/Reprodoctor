import RootNavigator from "./src/navigations/rootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
