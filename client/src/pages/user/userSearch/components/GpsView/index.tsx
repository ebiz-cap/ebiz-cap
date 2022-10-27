import styled from "styled-components";
import Kakaomap from "./Kakaomap";
const GpsView = (): JSX.Element => {
  return (
    <GpsViewContainer className="gpsView-container">
      <Kakaomap />
    </GpsViewContainer>
  );
};

const GpsViewContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: blue;
  margin-top: 11vh;
`;

export default GpsView;
