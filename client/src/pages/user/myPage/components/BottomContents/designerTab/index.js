import styled from "styled-components";
import { Card, Carousel, CARDS } from "../components/HistoryCard";
const DesignerTab = () => {
  return (
    <DesignerTabContainer>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={i}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        ))}
      </Carousel>
    </DesignerTabContainer>
  );
};

const COLOR_BLUE = "#041cf6";
const COLOR_Mint = "#6be4ff";

const DesignerTabContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, ${COLOR_Mint}, ${COLOR_BLUE});
  font-family: "Montserrat", sans-serif;
`;
export default DesignerTab;
