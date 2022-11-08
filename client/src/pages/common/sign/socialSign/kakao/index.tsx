import img_social_kakao from "../../../../../../src/env/imgsrc/socialSign/kakao_login_medium_wide.png";

const SocialKakaoBtn = (): JSX.Element => {
  return (
    <img
      style={{ marginTop: "10px", width: "100%" }}
      src={img_social_kakao}
      alt="social_kakao_btn"
    />
  );
};

export default SocialKakaoBtn;
