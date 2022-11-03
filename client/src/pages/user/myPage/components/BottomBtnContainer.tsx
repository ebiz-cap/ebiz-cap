import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { setUserMypageTab } from "store/user/UserMypageTabSlice";

enum UserMyTabType {
  history = 1,
  designer = 2,
  third = 3,
}

const BottomBtnContainer = (): JSX.Element => {
  // redux
  const userMypageTab = useSelector((state: RootState) => {
    return state.userMypageTab.value;
  });
  const dispatch = useDispatch();

  const setUserMypageTabCall = (tabType: UserMyTabType) => {
    dispatch(setUserMypageTab(tabType));
  };
  return (
    <BottomBtnBox>
      <BtnUnit
        className={userMypageTab === 1 ? "yes" : "no"}
        onClick={() => {
          setUserMypageTabCall(1);
        }}
      >
        내머리
      </BtnUnit>
      <BtnUnit
        className={userMypageTab === 2 ? "yes" : "no"}
        onClick={() => {
          setUserMypageTabCall(2);
        }}
      >
        선호 디자이너
      </BtnUnit>
      <BtnUnit
        className={userMypageTab === 3 ? "yes" : "no"}
        onClick={() => {
          setUserMypageTabCall(3);
        }}
      >
        몰?루
      </BtnUnit>
    </BottomBtnBox>
  );
};
export default BottomBtnContainer;

const BottomBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-evenly;
  width: 100;
  height: 35px;
  border-bottom: solid;
  border-color: #adadad;
  border-width: 0.5px;
`;

const BtnUnit = styled.div`
  font-weight: ${(props) => (props.className === "yes" ? "bold" : "")};
  color: ${(props) => (props.className === "yes" ? "black" : "grey")};
  width: 100%;
  text-align: center;
  height: 100%;
  background-color: yellow;
`;
