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

import MyPage from "./pages/designer/myPage";
import UserSearch from "pages/user/userSearch";
import UserTrend from "pages/user/userTrend";
import UserHome from "pages/user/userHome";

import DesignerHome from "pages/designer/designerHome";

//
import "./App.css";
import DesignerTrend from "pages/designer/designerTrend";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/signIn" element={<SignInPAD />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/success" element={<SignUpSucc />} />

          <Route path="/customer" element={<UserHome />}></Route>
          <Route path="/customer/home" element={<UserHome />}></Route>
          <Route path="/customer/search" element={<UserSearch />} />
          <Route path="/customer/trend" element={<UserTrend />} />
          <Route path="/customer/community" element={<div></div>} />
          <Route path="/customer/myPage" element={<MyPage />} />

          <Route path="/designer" element={<DesignerHome />} />
          <Route path="/designer/home" element={<DesignerHome />} />
          <Route path="/designer/trend" element={<DesignerTrend />} />
          <Route path="/designer/community" element={<></>} />
          <Route path="/designer/myPage" element={<MyPage />} />
          <Route path="/designer/chat" element={<DesignerHome />} />
        </Routes>
        <Mobile>
          <MobUserFooter />
        </Mobile>
      </Provider>
    </div>
  );
}

export default App;
