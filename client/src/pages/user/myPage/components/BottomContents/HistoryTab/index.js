import styled from "styled-components";
import { Card, Carousel, CARDS } from "../components/HistoryCard";
const HistoryTab = () => {
  return (
    <HistoryTabContainer>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={i}
            BLUEey={i}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        ))}
      </Carousel>
    </HistoryTabContainer>
  );
};

const COLOR_PINK = "#EC4899";
const COLOR_PURPLE = "#8B5CF6";

const HistoryTabContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, ${COLOR_PURPLE}, ${COLOR_PINK});
  font-family: "Montserrat", sans-serif;
`;

export default HistoryTab;
