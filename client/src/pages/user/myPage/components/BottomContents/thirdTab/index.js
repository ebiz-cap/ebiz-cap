import styled from "styled-components";
import { Card, Carousel, CARDS } from "../components/HistoryCard";
const ThirdTab = () => {
  return (
    <ThirdTabContainer>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={i}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        ))}
      </Carousel>
    </ThirdTabContainer>
  );
};

const COLOR_GREEN = "#80fb65";
const COLOR_YELLOW = "#fbff85";

const ThirdTabContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, ${COLOR_YELLOW}, ${COLOR_GREEN});
  font-family: "Montserrat", sans-serif;
`;

export default ThirdTab;
