import styled from "styled-components";

export const HomeStyled = styled.div`
  .home-page-container {
    color: ${(props) => (props.theme === "light" ? " #1c1c1c" : "white")};

    /* border: 1px solid black; */
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 10px;
  }
  .content-block-container {
    margin: 5px;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 1px 3px 3px 2px
      ${(props) => (props.theme === "light" ? " gray" : "black")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    min-width: 200px;
    height: 120px;
    gap: 10px;
    background-color: ${(props) =>
      props.theme === "light" ? " powderblue" : "black"};
  }

  .content-block-container h3 {
    color: ${(props) => (props.theme === "light" ? " gray" : "white")};
  }
  .content-block-container p {
    font-weight: bold;
  }
  .title-container {
    border-bottom: 1px solid
      ${(props) => (props.theme === "light" ? " white" : "gray")};
    width: 200px;
    display: flex;
    padding-bottom: 5px;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
  }

  .not-selected {
    color: ${(props) => (props.theme === "light" ? " black" : "white")};
    font-weight: bold;
  }
`;
