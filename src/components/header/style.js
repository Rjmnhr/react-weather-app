import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};

    margin: 10px;
    padding: 5px;
    min-height: 100px;
    width: 1100px;
    position: static;
  }
`;

export default HeaderWrapper;
