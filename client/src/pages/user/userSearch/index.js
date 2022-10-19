import styled from "styled-components";
import { useRef, useEffect } from "react";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
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

  useEffect(() => {
    if (isGps === true) {
      toSlide2();
    } else {
      toSlide1();
    }
  }, [isGps]);

  const toSlide1 = (num) => {
    console.log("go to slide 1", num);
    swiperRef.current?.swiper.slideTo(0);
  };
  const toSlide2 = (num) => {
    console.log("go to slide 2", num);
    swiperRef.current?.swiper.slideTo(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isGps]);

  return (
    <UserSearchContainer className="userSearch-container">
      <SearchHeader>
        <TypeToggleBtn />
      </SearchHeader>

      <PageContainer className="page-container">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiped", swiper)}
          style={{ height: "100%" }}
          touchRatio={0}
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

const SearchHeader = styled.header`
  position: fixed;
  top: 0px;
  height: 11vh;
  z-index: 5;

  width: 100%;
  box-shadow: 0 6px 4px 4px grey;
`;

// header와 toggle 버튼 위치 및 height vh로 지정중
export default UserSearch;
