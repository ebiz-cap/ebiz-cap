import styled from "styled-components";
const TrendView = (): JSX.Element => {
  return (
    <TrendViewContainer className="trendView-container">
      <TrendUnitContainer>
        <TrendUnitBox>
          <div>머리 컬렉션(뱃지 수집 시스템)</div>
        </TrendUnitBox>
        <TrendUnitBox>
          <div>나의 머리 주기 (전체평균이랑 비교)</div>
        </TrendUnitBox>
        <TrendUnitBox>
          <div>소비내역? 별로같기도</div>
        </TrendUnitBox>
        <TrendUnitBox>유저 검색 TOP10 스타일</TrendUnitBox>
        <TrendUnitBox>급상승 트렌드</TrendUnitBox>
        <TrendUnitBox>유저 검색 TOP10 스타일</TrendUnitBox>
        <TrendUnitBox>급상승 트렌드</TrendUnitBox>
        <TrendUnitBox>유저 검색 TOP10 스타일</TrendUnitBox>
        <TrendUnitBox>급상승 트렌드</TrendUnitBox>
        <TrendUnitBox>유저 검색 TOP10 스타일</TrendUnitBox>
        <TrendUnitBox>급상승 트렌드</TrendUnitBox>
        <TrendUnitBox>유저 검색 TOP10 스타일</TrendUnitBox>
        <TrendUnitBox>급상승 트렌드</TrendUnitBox>
      </TrendUnitContainer>
    </TrendViewContainer>
  );
};

const TrendViewContainer = styled.div`
  flex: 1;
  width: 100%;
  background-color: #e6e6e6;
`;
const TrendUnitContainer = styled.div`
  height: auto;
  margin-top: 50px;
`;
const TrendUnitBox = styled.div`
  margin-top: 15px;
  background-color: white;
  height: 300px;
`;

export default TrendView;
