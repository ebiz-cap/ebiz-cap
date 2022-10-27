import styled from "styled-components";
const SearchView = (): JSX.Element => {
  return (
    <SearchViewContainer className="searchView-container"></SearchViewContainer>
  );
};

const SearchViewContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: red;
  margin-top: 11vh;
`;
export default SearchView;
