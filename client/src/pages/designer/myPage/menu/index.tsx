import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import styled from "styled-components";
import "./menuCard.css";

import w1 from "./test_img/w1.jpg";
import w2 from "./test_img/w2.jpg";
import w3 from "./test_img/w3.jpg";
import w4 from "./test_img/w4.jpg";
import w5 from "./test_img/w5.jpg";
import w6 from "./test_img/w6.jpg";
import w7 from "./test_img/w7.jpg";

interface MenuCard {
  imgsrc: string;
  styles: Array<String>;
  price: number;
}

const ChipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  padding-left: 10px;
`;
const Chip = styled.div`
  background-color: #e8d5bb;
  border-radius: 100px;
  padding: 3px 15px 3px 15px;
  margin-right: 5px;
  font-size: 14px;
  /* width: 60px; */
`;

const MenuContent = styled.div`
  height: 90%;
  width: 200px;
  border-radius: 10px;
  background-color: red;
`;
const MenuCard = ({ imgsrc, styles, price }: MenuCard): JSX.Element => {
  return (
    <MenuContent>
      <img className="menu-img" src={imgsrc} />
      <ChipWrapper>
        {styles.map((style) => (
          <Chip>{style}</Chip>
        ))}
      </ChipWrapper>

      <div>{price}</div>
    </MenuContent>
  );
};
const Menu = () => {
  const arr_cards = [
    {
      imgsrc: w1,
      styles: ["숏컷", "볼륨펌"],
      price: 50000,
    },
    {
      imgsrc: w2,
      styles: ["레이어드", "c컬펌"],
      price: 50000,
    },
    {
      imgsrc: w3,
      styles: ["일자단발"],
      price: 50000,
    },
    {
      imgsrc: w4,
      styles: ["허쉬컷", "c컬펌"],
      price: 50000,
    },
    {
      imgsrc: w5,
      styles: ["레이어드컷", "글램펌"],
      price: 50000,
    },
    {
      imgsrc: w6,
      styles: ["레이어드컷", "히피펌"],
      price: 50000,
    },
    {
      imgsrc: w7,
      styles: ["테슬컷"],
      price: 50000,
    },
  ];

  return (
    <div className="menu-slide-container">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1.5}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="menu-swiper"
      >
        {arr_cards.map((card, index) => (
          <SwiperSlide className="menu-slide" key={index}>
            <MenuCard
              imgsrc={card.imgsrc}
              styles={card.styles}
              price={card.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;
