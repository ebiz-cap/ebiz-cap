import styled from "styled-components";

import textLogo from "../../../env/imgsrc/brand/text_logo.png";
import reservation from "../../../env/imgsrc/pictoSet1/pin.png";

import {
  ParentContainer,
  STYLED_PADDING_VALUE,
  TitleLogo,
  TitleWrapper,
} from "pages/components/CustomBox";

import icon1_notification from "../../../env/imgsrc/pictoSet2_designer/notification.png";
import icon2_dm from "../../../env/imgsrc/pictoSet2_designer/dm2.png";
import designerImg from "../../../env/imgsrc/test_profileImg.jpg";
import { relative } from "path";
import { flexbox } from "@mui/system";
import { COLOR_LIGHT_GREY, COLOR_PURPLE1 } from "pages/components/COLOR";
import { useCookies } from "react-cookie";

const reqUserInfo = () => {};
const DesignerHome = () => {
  const [cookies, setCookies] = useCookies(["userData"]);
  const { shortId, name, nickName } = cookies.userData;

  return (
    <ParentContainer style={{ backgroundColor: "#F3F3F3", height: "100vh" }}>
      <ContentsContainer>
        <div style={{ height: "40px" }} />
        <MyInfoContainer>
          <img
            src={designerImg}
            alt="profile"
            style={{
              width: "80px",
              borderRadius: "100px",
              borderColor: "white",
              borderWidth: "4px",
              borderStyle: "solid",
            }}
          />
          <div className="info-text">
            {nickName}님,
            <div /> 오늘도 가볼까요?
          </div>
        </MyInfoContainer>

        {/* <div>DM, 알림 컨테이너</div>
      <div>예약정보 컨테이너</div>
      <div>커뮤니티, 트렌드 네비게이팅</div> */}
      </ContentsContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "15px",
            width: "90%",
            height: "70px",
            backgroundColor: "white",
            position: "relative",
            top: "-25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "50%",
              borderStyle: "solid",
              borderRightColor: "#F3F3F3",
              borderWidth: "0px 1px 0px 0px",
              color: "GREY",
              fontSize: "13px",
              fontWeight: "normal",
            }}
          >
            최근 달린 리뷰
          </div>
          <div
            style={{
              width: "50%",
              color: "GREY",
              fontSize: "13px",
              fontWeight: "normal",
            }}
          >
            평균 별점
          </div>
        </div>

        <div
          id="reservation-container"
          style={{
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: "white",
            height: "120px",
            width: "90%",
            marginBottom: "15px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            id="reservation-wrapper"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <IconBox
              style={{
                borderRight: "solid",
                borderColor: `${COLOR_LIGHT_GREY}`,
                borderWidth: "1.5px",
                paddingRight: "15px",
              }}
            >
              <img
                src={reservation}
                style={{
                  width: "50px",
                  height: "50px",
                  paddingLeft: "3px",
                }}
              />
              <IconText style={{ fontWeight: "bold" }}>다음예약</IconText>
            </IconBox>
            <div id="reservation-info"></div>
          </div>
        </div>

        <CategoryContainer
          style={{
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <CategoryWrapper1>
            <IconBox>
              <IconImg src={icon1_notification} />
              <IconText>알림</IconText>
            </IconBox>
            <IconBox>
              <IconImg src={icon2_dm} />
              <IconText>디엠</IconText>
            </IconBox>
          </CategoryWrapper1>
        </CategoryContainer>

        <div
          id="reservation-container"
          style={{
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: "white",
            height: "300px",
            width: "90%",
            marginBottom: "15px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        ></div>
      </div>
    </ParentContainer>
  );
};

export default DesignerHome;

const ContentsContainer = styled.div`
  /* padding-top: 10px; */
  background-color: #c58fff;
  border-radius: 0px 0px 30px 30px;
`;
const CategoryContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 90%;
  margin-bottom: 25px;
`;
const CategoryWrapper1 = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10%;
  padding-right: 10%;
  /* padding-top: 4%;
  padding-bottom: 7%; */
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;
`;

const IconText = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconImg = styled.img`
  width: 40px;
`;

const MyInfoContainer = styled.div`
  padding: 10px 10px 40px 10px;
  display: flex;
  flex-direction: row;
  & > .info-text {
    font-family: "RecipeKorea";
    font-size: 23px;
    color: white;
    padding: 13px 0px 0px 13px;
    text-align: left;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;
