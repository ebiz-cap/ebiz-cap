import React from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import isUserCardActiveSlice, {
  setIsUserCardActive,
} from "store/common/isUserCardActive";

export const CARDS = 2;
const MAX_VISIBILITY = 2;

export const Card = ({ title, typeNum, img }) => {
  const dispatch = useDispatch();
  const setIsUserCardActiveCall = (isUserCardActive) => {
    console.log(typeNum);
    dispatch(setIsUserCardActive(isUserCardActive));
  };
  return (
    <StyledCard
      src={img}
      className="card"
      onClick={() => {
        setIsUserCardActiveCall(typeNum);
      }}
    ></StyledCard>
  );
};

export const Carousel = ({ children }) => {
  const active = useSelector((state) => {
    return state.isUserCardActive.value;
  });
  const count = React.Children.count(children);

  return (
    <StyledCarousel className="carousel">
      {React.Children.map(children, (child, i) => (
        <StyledCardContainer
          key={i}
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 5,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 5,
            // opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </StyledCardContainer>
      ))}
    </StyledCarousel>
  );
};

//
const COLOR_GRAY = "#9CA3AF";

const COLOR_BLACK = "#1F2937";
const CARD_SIZE = "90px";

const StyledCarousel = styled.div`
  width: 100px;
  position: relative;
  /* width: ${CARD_SIZE}; */
  height: ${CARD_SIZE};
  perspective: 500px;
  transform-style: preserve-3d;
`;
const StyledCard = styled.img`
  width: 80px;
  height: 80px;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 100%;
  color: ${COLOR_GRAY};
  text-align: justify;
  transition: all 0.3s ease-out;

  p,
  h2 {
    transition: all 0.3s ease-out;
    opacity: var(--active);
  }
`;

const StyledCardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 30deg))
    translateX(calc(var(--offset) * -10rem))
    translateZ(calc(var(--abs-offset) * -15rem))
    translateX(calc(var(--direction) * -1rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
`;
