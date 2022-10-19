import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TypeToggleBtn from "./components/TypeToggleBtn";
import CurationView from "./components/CurationView";
import TrendView from "./components/TrendView";
import { red } from "@material-ui/core/colors";
import UserTrendHeader from "./components/TrendView/UserTrendHeader";

const UserTrend = () => {
  const [isTrendMy, setIsTrendMy] = useState(true);

  //리덕스: isCuration
  const isCuration = useSelector((state) => {
    return state.mobUserTrendIsCuration.value;
  });

  const swiperRef = useRef(null);

  const toSlide1 = (num) => {
    console.log("go to slide 1", num);
    swiperRef.current?.swiper.slideTo(0);
  };
  const toSlide2 = (num) => {
    console.log("go to slide 2", num);
    swiperRef.current?.swiper.slideTo(1);
  };

  useEffect(() => {
    if (isCuration === true) {
      window.scrollTo(0, 0);
      toSlide2();
    } else {
      window.scrollTo(0, 0);
      toSlide1();
    }
  }, [isCuration]);

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
    <UserTrendContainer className="userTrend-container">
      <TypeToggleBtn />

      <PageContainer className="page-container">
        {isCuration ? <div>yes</div> : <UserTrendHeader />}
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
            <TrendView />
          </SwiperSlide>

          <SwiperSlide>
            <CurationView />
          </SwiperSlide>
        </Swiper>
      </PageContainer>
    </UserTrendContainer>
  );
};

const UserTrendContainer = styled.div`
  width: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
  margin-top: 60px;
`;

// const TrendHeader = styled.header`
//   position: fixed;
//   top: 0px;
//   height: 11vh;
//   z-index: 5;

//   width: 100%;
//   box-shadow: 0 6px 4px 4px grey;
// `;

// header와 toggle 버튼 위치 및 height vh로 지정중
export default UserTrend;
