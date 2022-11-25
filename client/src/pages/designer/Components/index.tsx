import { COLOR_LIGHT_GREY } from "pages/components/COLOR";
import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #c58fff;
  border-radius: 0px 0px 30px 30px;
`;

const MyInfoContainer = styled.div`
  padding: 10px 10px 40px 10px;
  display: flex;
  flex-direction: row;
  & > .info-text {
    font-family: "RecipeKorea";
    font-size: 23px;
    color: white;
    padding: 13px 0px 0px 13px;
    text-align: left;
  }
  & > .img-profile {
    width: 80px;
    border-radius: 100px;
    border-color: white;
    border-width: 4px;
    border-style: solid;
  }
`;

const CategoryContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  /* width: 90%; */
  margin-bottom: 25px;
`;
const CategoryWrapper1 = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10%;
  padding-right: 10%;

  & > .icon-box {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    align-items: center;
    & > .icon-img {
      width: 40px;
    }

    & > .icon-text {
      margin-top: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const ReservationContainer = styled.div`
  height: 120px;
  /* width: 90%; */
  border-radius: 10px 10px 10px 10px;
  background-color: white;

  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .reservation-wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }

  .reserv-icon {
    width: 50px;
    height: 50px;
    padding-left: 3px;
  }

  .icon-box {
    border-right: solid;
    border-color: ${COLOR_LIGHT_GREY};
    border-width: 1.5px;
    padding-right: 15px;
  }
  .icon-text {
    font-weight: bold;
  }
  
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;
`;

const IconText = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconImg = styled.img`
  width: 40px;
`;

const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .container-child {
    width: 90%;
  }
`;

const MyStatusContainer = styled.div`
  border-radius: 15px;
  width: 90%;
  height: 70px;
  background-color: white;
  position: relative;
  top: -25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  & > .status-box {
    width: 50%;

    & > .status-title {
      color: GREY;
      font-size: 13px;
      font-weight: normal;
    }
  }
  & > .status-left {
    border-style: solid;
    border-color: #f3f3f3;
    border-width: 0px 1px 0px 0px;
  }
`;
export {
  MyInfoContainer,
  ProfileContainer,
  MainContentsContainer,
  CategoryContainer,
  CategoryWrapper1,
  ReservationContainer,
  MyStatusContainer,
  IconBox,
  IconText,
  IconImg,
};
