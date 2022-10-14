import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Desktop, Mobile, Default } from "./common/style/mediaQuery";
import MobFooter from "common/components/mobile/MobFooter";
import ProfileManage from "./pages/user/profileManage/ProfileManage";
import UserSearch from "pages/user/userSearch/UserSearch";
import Home from "pages/user/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user" element={<Home />}></Route>
      </Routes>
      <UserSearch />
      <Mobile>
        <MobFooter />
      </Mobile>
    </div>
  );
}

export default App;
