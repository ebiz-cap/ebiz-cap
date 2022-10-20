import styled from "styled-components";
import { Card, Carousel, CARDS } from "./HistoryCard";
const HistoryTab = () => {
  return (
    <HistoryTabContainer>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={i}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
        ))}
      </Carousel>
    </HistoryTabContainer>
  );
};

const HistoryTabContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, #8b5cf6, #ec4899);
  font-family: "Montserrat", sans-serif;
`;

export default HistoryTab;
