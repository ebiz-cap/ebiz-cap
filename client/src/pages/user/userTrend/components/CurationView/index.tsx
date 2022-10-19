import styled from "styled-components";
const CurationView = (): JSX.Element => {
  return (
    <CurationViewContainer className="curationView-container">
      <CurationUnitBox>
        <div>큐레이션~</div>
      </CurationUnitBox>
      <CurationUnitBox>
        <div>2</div>
      </CurationUnitBox>
      <CurationUnitBox>
        <div>3</div>
      </CurationUnitBox>
      <CurationUnitBox></CurationUnitBox>
      <CurationUnitBox></CurationUnitBox>
    </CurationViewContainer>
  );
};

const CurationViewContainer = styled.div`
  width: 100%;
  background-color: #e6e6e6;
`;

const CurationUnitBox = styled.div`
  margin-top: 15px;
  background-color: white;
  height: 300px;
`;

export default CurationView;
