import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
//
import { Desktop, Mobile, Default } from "./common/style/mediaQuery";
import MobUserFooter from "common/components/mobile/MobUserFooter";

import Sign from "pages/common/sign";
import { SignInPAD } from "pages/common/sign/signForm/signIn";
import SignUp from "pages/common/sign/signForm/signUp";
import SignUpSucc from "pages/common/sign/signForm/signUp/SignUpSucc";

import MyPage from "./pages/user/myPage";
import UserSearch from "pages/user/userSearch";
import UserTrend from "pages/user/userTrend";
import UserHome from "pages/user/userHome";

import DesignerHome from "pages/designer/designerHome";

//
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/signIn" element={<SignInPAD />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/success" element={<SignUpSucc />} />

          <Route path="/user" element={<UserHome />}></Route>
          <Route path="/user/search" element={<UserSearch />} />
          <Route path="/user/trend" element={<UserTrend />} />
          <Route path="/user/community" element={<div></div>} />
          <Route path="/user/myPage" element={<MyPage />} />

          <Route path="/designer" element={<DesignerHome />} />
        </Routes>
        <Mobile>
          <MobUserFooter />
        </Mobile>
      </Provider>
    </div>
  );
}

export default App;
