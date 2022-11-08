import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";

import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";

const SignUpSucc = (): JSX.Element => {
  const navigate = useNavigate();
  const NICKNAME = "수평";
  const EMAIL = "he1236@ajou.ac.kr";

  const isDesigner = useSelector((state: RootState) => {
    return state.isLoggedNDesigner.value.isDesigner;
  });

  return (
    <WelcomeContainer>
      <PureH2 style={{ margin: "0px" }}>{NICKNAME}님,</PureH2>
      {isDesigner ? (
        <PureH2>디자이너가 되신걸 환영해요!👏</PureH2>
      ) : (
        <PureH2>친구가 되신걸 환영해요!👏</PureH2>
      )}
      <MainTxtBox>
        입력해주신 이메일
        <span style={{ color: "gray" }}>({EMAIL})</span>로 가입이
        완료되었습니다. {NICKNAME}님을 위해 바로 사용 가능한 할인쿠폰을
        발급해드렸어요💌
        <br />
        <br />
        너를 위한, 디자이너를 위한, 머리할래에서 다양한 트렌드를 경험해보세요!
      </MainTxtBox>
      <GoBackBtn
        onClick={() => {
          navigate("/signIn");
        }}
      >
        로그인하기
      </GoBackBtn>
    </WelcomeContainer>
  );
};

const GoBackBtn = styled.div`
  ${STYLED_BTN_FULLWIDTH_VALUE}
`;

const WelcomeContainer = styled.div`
  ${STYLED_PADDING_VALUE};
`;
const PureH2 = styled.h2`
  margin: 0px;
`;

const MainTxtBox = styled.p`
  padding: 16px 0px;
  font-size: 14px;
`;
export default SignUpSucc;
