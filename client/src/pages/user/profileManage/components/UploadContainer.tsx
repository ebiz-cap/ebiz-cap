import Typography from "@mui/material/Typography";
import styled from "styled-components";
import axios from "axios";

import { useState } from "react";

const Upload = (): JSX.Element => {
  //
  const [img, setImg] = useState("");

  const formSubmit = (e: any) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);

    axios
      .post("http://localhost:8000/upload", formData)
      .then((res) => {
        setImg(res.data.location);
        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
  };

  return (
    <UploadContainer>
      <Typography
        sx={{
          marginBottom: "20px",
        }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        프로필 사진
      </Typography>
      <ImgPreview
        id="img-preview"
        src={img}
        style={{ width: "140px", height: "140px", borderRadius: "50%" }}
      />
      <UploadBtn className="input-img-button" htmlFor="input-img">
        업로드
      </UploadBtn>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        id="input-img"
        onChange={formSubmit}
      ></input>
    </UploadContainer>
  );
};

export default Upload;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ImgPreview = styled.img`
  border-style: solid;
  border-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const UploadBtn = styled.label`
  margin-top: 15px;
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
`;
