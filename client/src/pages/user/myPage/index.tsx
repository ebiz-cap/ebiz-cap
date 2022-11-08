import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Upload from "./components/UploadContainer";
import TopBtnContainer from "./components/TopBtnContainer";

import test_profileImg from "../../../env/imgsrc/test_profileImg.jpg";
import BottomBtnContainer from "./components/BottomBtnContainer";

import BottomContents from "./components/BottomContents";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "300px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ProfileManage = (): JSX.Element => {
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TopContainer className="top-container">
        <BackgroundImage className="background-img" />
        <ProfileImg src={test_profileImg} onClick={handleOpen} />
        <MyInfoBox>
          <div>{"조성우"}</div>
          <div>{"포인트"}</div>
          <div>{"comment"}</div>
        </MyInfoBox>
        <TopBtnContainer />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Upload />
          </Box>
        </Modal>
      </TopContainer>

      <MiddleEmpty className="middle-empty" />
      <BottomContainer>
        <BottomBtnContainer />
        <BottomContents />
      </BottomContainer>
    </div>
  );
};
const TopContainer = styled.div`
  height: 300px;
  width: 100%;
  background-color: red;
`;
const MiddleEmpty = styled.div`
  height: 50px;
  width: 100%;
  background-color: brown;
`;

const BackgroundImage = styled.div`
  height: 50%;
  background-color: blue;
`;
const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  z-index: 4;
  position: absolute;
  top: 100px;
  left: 10px;
`;

const MyInfoBox = styled.div`
  width: 50%;
  position: absolute;
  top: 220px;
  left: 20px;
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: green;
`;

export default ProfileManage;
