import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Upload from "./components/UploadContainer";

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
      <ProfileImg onClick={handleOpen}></ProfileImg>
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
    </div>
  );
};

const ProfileImg = styled.div`
  height: 80px;
  width: 80px;
  background-color: red;
  border-radius: 50%;
`;

export default ProfileManage;
