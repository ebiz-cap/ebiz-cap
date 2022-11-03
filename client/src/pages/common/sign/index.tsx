import { useState, useEffect } from "react";
import styled from "styled-components";

//
import Splash from "./splash/Splash";

const Sign = (): JSX.Element => {
  return (
    <SignBody>
      <Splash />
      <div style={{ position: "absolute", top: "0%" }}>본문</div>
    </SignBody>
  );
};

const SignBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export default Sign;
