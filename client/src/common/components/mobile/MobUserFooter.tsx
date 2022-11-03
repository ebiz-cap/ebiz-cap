import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { update } from "../../../store/user/mobUserFooterSlice";
import "./MobUserFooter.css";

import styled from "styled-components";

const MobFooter = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  const tabType = useSelector((state: RootState) => {
    return state.mobUserFooter.value;
  });
  const setTabType = (tabStr: String) => {
    dispatch(update(tabStr));
  };
  //
  const isLoggedNDesigner = useSelector((state: RootState) => {
    return state.isLoggedNDesigner.value;
  });

  //
  const UserFooterContents = (): JSX.Element => {
    return (
      <div className="userFooterContents">
        <IconBox
          onClick={() => {
            navigate("/user");
            setTabType("home");
          }}
        >
          {tabType === "home" ? (
            <HomeIcon color="action" className="onIcon" />
          ) : (
            <HomeOutlinedIcon color="action" className="icon" />
          )}

          <div className="icon-text">홈</div>
        </IconBox>

        <IconBox
          onClick={() => {
            navigate("/user/search");
            setTabType("search");
          }}
        >
          {tabType === "search" ? (
            <ContentCutIcon className="onIcon" />
          ) : (
            <ContentCutOutlinedIcon className="icon" />
          )}

          <div className="icon-text">검색</div>
        </IconBox>

        <IconBox
          onClick={() => {
            navigate("/user/trend");
            setTabType("trend");
          }}
        >
          {tabType === "trend" ? (
            <WhatshotIcon className="onIcon" />
          ) : (
            <WhatshotOutlinedIcon className="icon" />
          )}

          <div className="icon-text">트렌드</div>
        </IconBox>

        <IconBox
          onClick={() => {
            navigate("/user/community");
            setTabType("community");
          }}
        >
          {tabType === "community" ? (
            <AccountBalanceIcon className="onIcon" />
          ) : (
            <AccountBalanceOutlinedIcon className="icon" />
          )}

          <div className="icon-text">커뮤니티</div>
        </IconBox>

        <IconBox
          onClick={() => {
            navigate("/user/myPage");
            setTabType("myPage");
          }}
        >
          {tabType === "myPage" ? (
            <AccountCircleIcon className="onIcon" />
          ) : (
            <AccountCircleOutlinedIcon className="icon" />
          )}

          <div className="icon-text">내정보</div>
        </IconBox>
      </div>
    );
  };

  const DesignerFooterContents = (): JSX.Element => {
    return <div className="designerFooterContents"></div>;
  };

  return (
    <footer className="mob-footer-container">
      {isLoggedNDesigner.isLoggedIn ? (
        isLoggedNDesigner.isDesigner ? (
          <DesignerFooterContents />
        ) : (
          <UserFooterContents />
        )
      ) : (
        <></>
      )}
    </footer>
  );
};

export default MobFooter;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
`;
