import { Provider } from "react-redux";
import "./App.css";
import IceCreamContainer from "./components/IceCreamContainer";
import MobileContainer from "./components/MobileContainer";
import UsersContainer from "./components/UsersContainer";
// import CakeContainer from "./components/CakeContainer/CakeContainer";
// import HooksCakeContainer from "./components/CakeContainer/HooksCakeContainer";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer/>
        <CakeContainer /> */}

        <IceCreamContainer/>
        <MobileContainer/>
        <UsersContainer/>
      </div>
    </Provider>
  );
}

export default App;
