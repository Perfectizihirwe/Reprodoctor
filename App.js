import RootNavigator from "./src/navigations/rootNavigator";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
      <Provider store={store}>
      <RootNavigator />
      </Provider>
  );
}
