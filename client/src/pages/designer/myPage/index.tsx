import { ParentContainer } from "pages/components/CustomBox";
import {
  MainContentsContainer,
  MyInfoContainer,
  ProfileContainer,
} from "../Components";

import designerImg from "../../../env/imgsrc/test_profileImg.jpg";

import styled from "styled-components";

import { IconButton } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import TopFuncBar from "../Components/TopFuncBar";
import Menu from "./menu";

const MyPage = () => {
  return (
    <ParentContainer
      style={{
        backgroundColor: "#F3F3F3",
        height: "150vh",
        // maxWidth: "500px",
      }}
    >
      <ProfileContainer
        style={{
          borderRadius: "0px",
        }}
      >
        <TopFuncBar />
        <MyInfoContainer
          style={{
            padding: "50px 0px 10px 0px",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "2px 4px 2px 4px",
              borderRadius: "5px",
              marginTop: "10px",
              marginLeft: "240px",
              zIndex: 1,
              fontSize: "13px",
            }}
          >
            프로필 관리
          </div>
          <div className="mypage-imgbox">
            <img
              className="img-profile"
              style={{
                width: "120px",
              }}
              src={designerImg}
              alt="img-profile"
            />
            <div className="nickName-profile">{`디자이너 조`}</div>
          </div>
        </MyInfoContainer>
      </ProfileContainer>
      <MainContentsContainer
        style={{
          marginTop: "120px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1000px",
        }}
      >
        <div className="title-child">커리어</div>
        <ChildContainer className="container-child">
          <div className="child-wrapper">{}</div>
          <ToggleSpread className="toggle-spread" />
        </ChildContainer>

        <div className="title-child">메뉴</div>
        <ChildContainer
          className="container-child"
          style={{
            height: "330px",
          }}
        >
          <div className="child-wrapper">
            <Menu />
          </div>
        </ChildContainer>

        <div className="title-child">최근 달린 리뷰</div>
        <ChildContainer className="container-child" style={{ height: "200px" }}>
          <div className="child-wrapper"></div>
        </ChildContainer>
      </MainContentsContainer>
    </ParentContainer>
  );
};

const ToggleSpread = (props: any) => {
  const { className } = props;
  return (
    <div className={className}>
      <KeyboardDoubleArrowDownIcon
        style={{
          width: "80px",
          height: "25px",
          color: "#b3b3b3",
        }}
      />
    </div>
  );
};

export default MyPage;

const ChildContainer = styled.div`
  background-color: white;
  height: 100px;
  border-radius: 10px;
  position: relative;

  & > .child-wrapper {
    padding: 10px 10px 10px 10px;
    height: 100%;
  }
  & > .toggle-spread {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fafafa;
    height: 20px;
    border-radius: 0px 0px 10px 10px;
    padding: 5px 0px 8px 0px;
    /* color: #b3b3b3; */
    font-size: 13px;
  }
`;
