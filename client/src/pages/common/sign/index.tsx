import { useState, useEffect } from "react";
import styled from "styled-components";

//
import Splash from "./splash/Splash";

const Sign = (): JSX.Element => {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2280);
  }, []);
  return (
    <SignBody>
      {isSplash ? <Splash /> : <>화면없음</>}
      <>본문</>
    </SignBody>
  );
};

const SignBody = styled.div`
  width: 150vw;
  height: 100vh;
`;
export default Sign;
