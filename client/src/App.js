import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
//
import { Desktop, Mobile, Default } from "./common/style/mediaQuery";
import MobUserFooter from "common/components/mobile/MobUserFooter";
import ProfileManage from "./pages/user/profileManage/ProfileManage";
import UserSearch from "pages/user/userSearch/UserSearch";
import Home from "pages/user/home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/user" element={<Home />}></Route>
        </Routes>
        <Mobile>
          <MobUserFooter />
        </Mobile>
      </Provider>
    </div>
  );
}

export default App;
