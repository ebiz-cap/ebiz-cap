import React, { useState } from "react";

import styled from "styled-components";

import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

export const CARDS = 10;
const MAX_VISIBILITY = 3;

export const Card = ({ title, content }) => (
  <StyledCard className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </StyledCard>
);

export const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <StyledCarousel className="carousel">
      {active > 0 && (
        <StyledBtn className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </StyledBtn>
      )}
      {React.Children.map(children, (child, i) => (
        <StyledCardContainer
          key={i}
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </StyledCardContainer>
      ))}
      {active < count - 1 && (
        <StyledBtn
          className="nav right"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </StyledBtn>
      )}
    </StyledCarousel>
  );
};

//
const COLOR_GRAY = "#9CA3AF";

const COLOR_BLACK = "#1F2937";
const CARD_SIZE = "23rem";

const StyledCarousel = styled.div`
  position: relative;
  width: ${CARD_SIZE};
  height: ${CARD_SIZE};
  perspective: 500px;
  transform-style: preserve-3d;
`;
const StyledCard = styled.div`
  margin: auto;
  width: 130px;
  height: 180px;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: ${COLOR_GRAY};
  text-align: justify;
  transition: all 0.3s ease-out;

  h2 {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: ${COLOR_BLACK};
  }

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
  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -1rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
`;

const StyledBtn = styled.button`
  padding-bottom: 100px;
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  width: 70px;

  &.left {
    position: absolute;
    left: 70px;
    transform: translateX(-100%) translatey(-50%);
  }

  &.right {
    position: absolute;
    right: 70px;
    transform: translateX(100%) translatey(-50%);
  }
`;
