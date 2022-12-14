// Img
import textLogo from "../../../env/imgsrc/brand/text_logo.png";
import img_image1 from "../../../env/imgsrc/promotion/img_image1.jpg";
import img_image2 from "../../../env/imgsrc/promotion/img_image2.jpg";
import img_image3 from "../../../env/imgsrc/promotion/img_image3.jpg";
import img_image4 from "../../../env/imgsrc/promotion/img_image4.jpg";
import img_image5 from "../../../env/imgsrc/promotion/img_image5.jpg";

import icon1 from "../../../env/imgsrc/pictoSet1/sciss.png";
import icon2 from "../../../env/imgsrc/pictoSet2/curation.png";
import icon3 from "../../../env/imgsrc/pictoSet2/history.png";
import icon4 from "../../../env/imgsrc/pictoSet2/dm.png";
import icon5 from "../../../env/imgsrc/pictoSet2/trend.png";
import icon6 from "../../../env/imgsrc/pictoSet2/reservation.png";
import icon7 from "../../../env/imgsrc/pictoSet2/community.png";

import { TitleLogo, TitleWrapper } from "pages/components/CustomBox";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// Core Lib
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { update } from "../../../store/user/mobUserFooterSlice";
import { setIsCuration } from "store/user/mobUserTrendIsCurationSlice";

const UserHome = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const setIsCurationCall = (isCur: boolean) => {
    dispatch(setIsCuration(isCur));
  };

  const setMobFooterTabCall = (tabStr: String) => {
    dispatch(update(tabStr));
  };
  return (
    <div className="home-container">
      <TitleWrapper>
        <TitleLogo src={textLogo} alt="text-logo" />
      </TitleWrapper>
      <CategoryContainer>
        <CategoryWrapper1>
          <IconBox
            onClick={() => {
              setMobFooterTabCall("search");
              navigate("/customer/search");
            }}
          >
            <IconImgCore src={icon1} alt="cat1" />
            <IconText>????????????</IconText>
          </IconBox>
          <IconBox
            onClick={() => {
              // setMobFooterTabCall("home");
              navigate("/customer/reservation");
            }}
          >
            <IconImg src={icon2} alt="cat1" />
            <IconText>??????</IconText>
          </IconBox>
          <IconBox
            onClick={() => {
              // setMobFooterTabCall("myPage");
              navigate("/customer/history");
            }}
          >
            <IconImg src={icon3} alt="cat1" />
            <IconText>?????????</IconText>
          </IconBox>
          <IconBox
            onClick={() => {
              // setMobFooterTabCall("myPage");
              navigate("/customer/dm");
            }}
          >
            <IconImg src={icon4} alt="cat1" />
            <IconText>??????</IconText>
          </IconBox>
        </CategoryWrapper1>
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              color: "#1f87ff",
              fontSize: "calc(2.1 * 1.5vw)",
            }}
          >
            ?????????????
          </div>
          <div
            style={{
              backgroundColor: "gray",
              width: "70%",
              height: "1px",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          ></div>
        </div>
        <CategoryWrapper2>
          <IconBox
            onClick={() => {
              setMobFooterTabCall("trend");
              navigate("/user/trend");
            }}
          >
            <IconImg src={icon5} alt="cat1" />
            <IconText>?????????</IconText>
          </IconBox>

          <IconBox
            onClick={() => {
              setIsCurationCall(true);
              setMobFooterTabCall("trend");
              navigate("/user/trend");
            }}
          >
            <IconImg src={icon6} alt="cat1" />
            <IconText>????????????</IconText>
          </IconBox>
          <IconBox
            onClick={() => {
              setMobFooterTabCall("community");
              navigate("/user/community");
            }}
          >
            <IconImg src={icon7} alt="cat1" />
            <IconText>????????????</IconText>
          </IconBox>
        </CategoryWrapper2>
      </CategoryContainer>
      <PromotionWrapper>
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "70%" }}
          allowTouchMove
        >
          <SwiperSlide>
            <CustomImg src={img_image1} alt="img1" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomImg src={img_image2} alt="img2" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomImg src={img_image3} alt="img3" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomImg src={img_image4} alt="img4" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomImg src={img_image5} alt="img5" />
          </SwiperSlide>
        </Swiper>
      </PromotionWrapper>
    </div>
  );
};

const CategoryContainer = styled.div`
  width: 100%;
`;
const CategoryWrapper1 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px 20px;
  padding: 10%;
  padding-top: 4%;
  padding-bottom: 7%;
`;

const CategoryWrapper2 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px 20px;
  padding: 20%;
  padding-top: 6%;
  padding-bottom: 7%;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
`;
const IconImg = styled.img`
  width: 65%;
`;
const IconImgCommu = styled.img`
  width: 49%;
`;

const IconImgCore = styled.img`
  transform: rotate(90deg);
  width: 65%;
  animation: vibrate 4s infinite;

  animation-fill-mode: forwards;
  @keyframes vibrate {
    0%,
    2% {
      transform: rotate(200deg);
    }

    2%,
    4% {
      transform: rotate(230deg);
    }
    4%,
    6% {
      transform: rotate(200deg);
    }
    6%,
    8% {
      transform: rotate(230deg);
    }
    8%,
    10% {
      transform: rotate(200deg);
    }

    10%,
    100% {
      transform: rotate(200deg);
    }
  }
`;

const IconText = styled.div`
  margin-top: 4px;
`;

const PromotionWrapper = styled.div``;

const CustomImg = styled.img`
  width: 100%;
  height: 8 0%;
`;
export default UserHome;
