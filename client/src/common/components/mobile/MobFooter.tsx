import styled from "styled-components";
import { Box } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import TodayIcon from "@mui/icons-material/Today";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";

import ReplyIcon from "@mui/icons-material/Reply";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./MobFooter.css";

const MobFooter = (): JSX.Element => {
  const navigate = useNavigate();

  const [tabType, setTabType] = useState("home");

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
          navigate("/");
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
          setTabType("search");
          navigate("/");
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
          navigate("/core");
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
          navigate("/history/list");
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
          navigate("about");
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

      {/* <ul className="footer-ul">
        <li className="footer-li">메뉴1</li>
        <li className="footer-li">메뉴2</li>
        <li className="footer-li">메뉴3</li>
      </ul> */}
    </footer>
  );
};

export default MobFooter;
