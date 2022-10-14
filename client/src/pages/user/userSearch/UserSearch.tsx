import TypeToggleBtn from "./components/TypeToggleBtn";
import Switch from "./components/Switch";

import styled from "styled-components";
const UserSearch = (): JSX.Element => {
  return (
    <UserSearchContainer>
      <TypeToggleBtn />
      {/* <Switch /> */}
    </UserSearchContainer>
  );
};

const UserSearchContainer = styled.div`
  width: 100%;
`;
export default UserSearch;
