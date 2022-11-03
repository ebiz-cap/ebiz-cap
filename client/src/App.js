import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
//
import { Desktop, Mobile, Default } from "./common/style/mediaQuery";
import MobUserFooter from "common/components/mobile/MobUserFooter";
import MyPage from "./pages/user/myPage";
import UserSearch from "pages/user/userSearch";
import UserTrend from "pages/user/userTrend";
import Home from "pages/user/home/Home";
import Sign from "pages/common/sign";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/login" element={<></>} />
          <Route path="/user" element={<Home />}></Route>
          <Route path="/user/search" element={<UserSearch />} />
          <Route path="/user/trend" element={<UserTrend />} />
          <Route path="/user/community" element={<div></div>} />
          <Route path="/user/myPage" element={<MyPage />} />
        </Routes>
        <Mobile>
          <MobUserFooter />
        </Mobile>
      </Provider>
    </div>
  );
}

export default App;
