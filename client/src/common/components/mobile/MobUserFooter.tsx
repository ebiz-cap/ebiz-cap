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
import { update } from "../../../store/mobUserFooterSlice";

import "./MobUserFooter.css";
const MobFooter = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tabType = useSelector((state: RootState) => {
    return state.mobUserFooter.value;
  });

  const setTabType = (tabStr: String) => {
    dispatch(update(tabStr));
  };

  return (
    <footer className="mob-footer-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
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
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
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
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
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
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
          fontSize: "",
        }}
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
      </div>

      <div
        onClick={() => {
          navigate("/user/myPage");
          setTabType("myPage");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
      >
        {tabType === "myPage" ? (
          <AccountCircleIcon className="onIcon" />
        ) : (
          <AccountCircleOutlinedIcon className="icon" />
        )}

        <div className="icon-text">내정보</div>
      </div>
    </footer>
  );
};

export default MobFooter;
