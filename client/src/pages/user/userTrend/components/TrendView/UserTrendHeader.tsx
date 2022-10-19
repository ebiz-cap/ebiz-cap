import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { setUserTrendIsMy } from "store/UserTrendIsMy";

const UserTrendHeader = (): JSX.Element => {
  // redux
  const isTrendMy = useSelector((state: RootState) => {
    return state.userTrendIsMy.value;
  });
  const dispatch = useDispatch();
  const setIsTrendMyCall = (isTrendMyOrNot: boolean) => {
    dispatch(setUserTrendIsMy(isTrendMyOrNot));
  };
  //
  //   scroll 'y'
  const scrollToMy = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToUsers = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (isTrendMy === true) {
      scrollToMy();
    } else if (isTrendMy === false) {
      scrollToUsers();
    }
  }, [isTrendMy]);
  return (
    <UserTrendHead>
      <div
        style={{
          position: "fixed",
          backgroundColor: "red",
          top: "60px",
          height: "2px",
          width: "30%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div
          onClick={(e) => {
            console.log("my");
            setIsTrendMyCall(true);
          }}
          style={{
            width: "30%",
            height: "60px",
            //   backgroundColor: "pink",
            borderRadius: "1em",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          my
        </div>
        <div
          onClick={(e) => {
            console.log("Users");
            setIsTrendMyCall(false);
          }}
          style={{
            width: "30%",
            height: "60px",
            //   backgroundColor: "pink",
            borderRadius: "1em",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          users
        </div>
      </div>
    </UserTrendHead>
  );
};

export default UserTrendHeader;

const UserTrendHead = styled.div`
  position: fixed !important;
  top: 0px !important;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
  width: 100%;
  height: 60px;
  border-bottom: solid;
  border-color: grey;
  border-width: 1px;
`;
