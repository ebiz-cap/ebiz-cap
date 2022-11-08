import SocialGoogleBtn from "./google";

import SocialKakaoBtn from "./kakao";

const SocialSign = () => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <SocialKakaoBtn />
      <SocialGoogleBtn style={{ marginTop: "10px" }} />
    </div>
  );
};

export default SocialSign;
