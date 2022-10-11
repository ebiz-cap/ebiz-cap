import "./App.css";
import Intro from "./pages/common/Intro";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import ProfileManage from "./pages/user/ProfileManage";
function App() {
  return (
    <div>
      <ProfileManage />
      <button
        onClick={() => {
          axios.get("localhost:8000/user").then((res) => {
            console.log("good");
          });
        }}
      />
    </div>
  );
}

export default App;
