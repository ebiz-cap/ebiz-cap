import { useState, useEffect } from "react";
import styled from "styled-components";

//
import Splash from "./Splash";

const Sign = (): JSX.Element => {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);
  return (
    <SignBody>
      {isSplash ? <Splash /> : <>화면없음</>}
      <>본문</>
    </SignBody>
  );
};

const SignBody = styled.div`
  height: 100vh;
`;
export default Sign;
