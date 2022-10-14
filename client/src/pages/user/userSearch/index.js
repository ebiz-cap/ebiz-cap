import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setIsGps } from "store/mobUserSearchIsGps";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import TypeToggleBtn from "./components/TypeToggleBtn";
import GpsView from "./components/GpsView";
import SearchView from "./components/SearchView";

const UserSearch = () => {
  //리덕스: isGps
  const isGps = useSelector((state) => {
    return state.mobUserSearchIsGps.value;
  });

  const swiperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isGps === true) {
      toSlide2();
    } else {
      toSlide1();
    }
  }, [isGps]);

  const nextSlide = () => {
    console.log("click next", swiperRef.current);
    swiperRef.current?.swiper.slideNext();
  };
  const toSlide1 = (num) => {
    console.log("go to slide 1", num);
    swiperRef.current?.swiper.slideTo(0);
  };
  const toSlide2 = (num) => {
    console.log("go to slide 2", num);
    swiperRef.current?.swiper.slideTo(1);
  };

  return (
    <UserSearchContainer>
      <TypeToggleBtn />
      <PageContainer className="page-container">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiped", swiper)}
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <SearchView />
          </SwiperSlide>

          <SwiperSlide>
            <GpsView />
          </SwiperSlide>
        </Swiper>
      </PageContainer>
    </UserSearchContainer>
  );
};

const UserSearchContainer = styled.div`
  width: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
`;

export default UserSearch;
