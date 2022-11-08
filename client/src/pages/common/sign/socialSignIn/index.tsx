import img_social_kakao from "../../../../../src/env/imgsrc/socialSign/kakao_login_medium_wide.png";
import SocialGoogleBtn from "./google";

import styled, { css, keyframes } from "styled-components";

const SocialSignIn = () => {
  return (
    <div>
      <img
        style={{ marginTop: "10px" }}
        src={img_social_kakao}
        alt="social_kakao_btn"
      />
      <SocialGoogleBtn style={{ marginTop: "10px" }} />
    </div>
  );
};

export default SocialSignIn;
