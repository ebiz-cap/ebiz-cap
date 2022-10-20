import styled from "styled-components";

const TopBtnContainer = (): JSX.Element => {
  return (
    <TopBtnBox>
      <TopBtnUnit>
        <div>{0}</div>
        <div>게시물</div>
      </TopBtnUnit>
      <TopBtnUnit>
        <div>{0}</div>
        <div>팔로우</div>
      </TopBtnUnit>
      <TopBtnUnit>
        <div>{0}</div>
        <div>팔로잉</div>
      </TopBtnUnit>
    </TopBtnBox>
  );
};

export default TopBtnContainer;

const TopBtnBox = styled.div`
  height: 70px;
  background-color: yellow;
  margin-top: 10px;
  margin-left: 130px;
  display: flex;
  flex-direction: row;
  justify-contents: space-evenly;
`;

const TopBtnUnit = styled.div`
  width: 100%;
  border: solid;
`;
