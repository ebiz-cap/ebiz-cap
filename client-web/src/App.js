import "./App.css";
import Intro from "./pages/common/Intro";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [img, setImg] = useState("");

  const formSubmit = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);

    axios
      .post("이미지 요청 주소", formData)
      .then((res) => {
        setImg(res.data.location);
        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
  };

  return (
    <div>
      <div className="img-preview">
        <ImgPreview id="img-preview" src={img} />
        <UploadImage
          type="file"
          accept="image/*"
          id="img"
          onChange={formSubmit}
        ></UploadImage>
      </div>
    </div>
  );
}

const ImgPreview = styled.img`
  border-style: solid;
  border-color: black;
  width: 250px;
  height: 250px;
  margin: 30px;
  position: absolute;
  left: 41%;
  right: 50%;
`;

const UploadImage = styled.input`
  height: 30px;
  position: absolute;
  left: 50%;
  right: 30%;
  margin-top: 300px;
`;

const ViewImage = styled.button`
  height: 30px;
  position: absolute;
  left: 50%;
  right: 35%;
  margin-top: 350px;
`;

export default App;
