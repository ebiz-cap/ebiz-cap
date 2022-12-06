import styled from "styled-components";
import { IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useEffect, useState } from "react";

const TopFuncBar = () => {
  return (
    <TopFuncBarContainer>
      <IconButton className="btn-notification">
        <NotificationsNoneIcon
          id="icon-notification"
          style={{
            width: "30px",
            height: "30px",
            // color: "purple"
          }}
        />
      </IconButton>
    </TopFuncBarContainer>
  );
};

export default TopFuncBar;

const TopFuncBarContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-top: 12px;
`;
