import reservation from "../../../env/imgsrc/pictoSet1/pin.png";

import { ParentContainer } from "pages/components/CustomBox";

import icon1_notification from "../../../env/imgsrc/pictoSet2_designer/notification.png";
import icon2_dm from "../../../env/imgsrc/pictoSet2_designer/dm2.png";
import designerImg from "../../../env/imgsrc/test_profileImg.jpg";

import { useCookies } from "react-cookie";
import {
  CategoryContainer,
  CategoryWrapper1,
  ProfileContainer,
  IconBox,
  IconText,
  MyInfoContainer,
  ReservationContainer,
  MainContentsContainer,
  MyStatusContainer,
} from "../Components";

const reqUserInfo = () => {};
const DesignerHome = () => {
  const [cookies, setCookies] = useCookies(["userData"]);
  const { shortId, name, nickName } = cookies.userData;

  return (
    <ParentContainer style={{ backgroundColor: "#F3F3F3", height: "100vh" }}>
      <ProfileContainer>
        <div id="top-pad" style={{ height: "40px" }} />
        <MyInfoContainer>
          <img className="img-profile" src={designerImg} alt="img-profile" />
          <div className="info-text">
            {nickName}님,
            <div /> 오늘도 가볼까요?
          </div>
        </MyInfoContainer>
      </ProfileContainer>
      <MainContentsContainer>
        <MyStatusContainer className="container-child">
          <div className="status-box status-left">
            <div className="status-title">최근 달린 리뷰</div>
          </div>
          <div className="status-box">
            <div className="status-title">평균 별점</div>
          </div>
        </MyStatusContainer>

        <ReservationContainer
          id="reservation-container"
          className="container-child"
        >
          <div className="reservation-wrapper">
            <IconBox className="icon-box">
              <img src={reservation} className="reserv-icon" />
              <IconText className="icon-text">다음예약</IconText>
            </IconBox>
            <div></div>
          </div>
        </ReservationContainer>

        <CategoryContainer className="container-child">
          <CategoryWrapper1>
            <div className="icon-box">
              <img
                className="icon-img"
                alt="icon-img"
                src={icon1_notification}
              />
              <div className="icon-text">알림</div>
            </div>
            <div className="icon-box">
              <img className="icon-img" alt="icon-img" src={icon2_dm} />
              <div className="icon-text">디엠</div>
            </div>
          </CategoryWrapper1>
        </CategoryContainer>

        <div className="container-child" id="reservation-container"></div>
      </MainContentsContainer>
    </ParentContainer>
  );
};

export default DesignerHome;
