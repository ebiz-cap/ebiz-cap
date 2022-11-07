import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
import React from "react";
const SocialGoogleBtn = (props) => {
  //   const params = useParams();
  //   const location = useLocation();
  //   const navigate = useNavigate();

  async function onSuccess(res) {
    const profile = res.getBasicProfile();

    const userdata = {
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      name: profile.getName(),
    };
    // 로그인 성공 후 실행하기 원하는 코드 작성.
  }

  const onFailure = (res) => {
    alert("구글 로그인에 실패하였습니다");
    console.log("err", res);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <GoogleOAuthProvider
        clientId={process.env.SOCIAL_SIGN_GOOGLE_OAUTH2_CLIENT_ID}
      >
        <GoogleLogin
          buttonText="구글로 로그인" // 버튼에 뜨는 텍스트
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

// export default withRouter(SocialGoogleBtn);

export default SocialGoogleBtn;
