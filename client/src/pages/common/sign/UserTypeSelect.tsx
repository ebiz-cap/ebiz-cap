import styled from "styled-components";
import { Card, Carousel } from "./SelectCarousel";
import img_btnUser from "../../../env/imgsrc/userType/유저타입_유저.png";
import img_btnDesigner from "../../../env/imgsrc/userType/유저타입_디자이너.png";
import { useSelector } from "react-redux";
import { RootState } from "store";

const UserTypeSelect = () => {
  const isUserActive = useSelector((state: RootState) => {
    return state.isUserCardActive.value;
  });
  return (
    <CarouselContainer>
      <Carousel>
        <TypeBox>
          <Card key={0} typeNum={0} title={"유저"} img={img_btnUser} />
        </TypeBox>
        <TypeBox>
          <Card key={1} typeNum={1} title={"디자이너"} img={img_btnDesigner} />
        </TypeBox>
      </Carousel>
      <TypeNotifyText>
        {isUserActive ? (
          <div
            style={{
              fontFamily: "Jalnan",
              color: COLOR_PURPLE,
              fontSize: "20px",
            }}
          >
            디자이너
          </div>
        ) : (
          <div
            style={{
              fontFamily: "Jalnan",
              color: COLOR_PINK,
              fontSize: "20px",
            }}
          >
            고객
          </div>
        )}
      </TypeNotifyText>
    </CarouselContainer>
  );
};

const COLOR_PINK = "#EC4899";
const COLOR_PURPLE = "#8B5CF6";

const TypeNotifyText = styled.div`
  font-weight: bold;
`;
const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* left: auto; */
`;

export default UserTypeSelect;
