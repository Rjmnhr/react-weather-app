import styled from "styled-components";

export const CityStyled = styled.div`
  .cities-container {
    display: flex;
    width: 1120px;

    height: 95vh;
    gap: 50px;
    margin-left: 40px;
  }
  .cities-list {
    width: 28%;
    height: 100%;
  }
  .city-content {
    width: 60%;
    height: 100%;
    /* background: powderblue; */

    /* border-radius: 8px; */
    box-shadow: 0px 5px 5px 0px
      ${(props) => (props.theme === "light" ? "#49494a" : "black")};
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#424242"};
  }
  .content-container {
    width: 100%;
    height: 87%;
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#424242"};
    padding: 0;
    margin-top: 0;
    margin: 0;
    /* border-radius: 0px 0px 8px 8px; */
    box-shadow: 0px 5px 5px 0px
      ${(props) => (props.theme === "light" ? "#49494a" : "black")};
    overflow: auto;
  }
  .top-bar-container {
    color: violet;
    background-color: black;
    display: flex;
    /* border-radius: 8px 8px 0px 0px; */

    margin: 0;
    justify-content: space-between;

    height: 10%;
    padding: 10px;
    align-items: center;
  }
  .content-container p {
    margin: 5px;
    min-width: 60px;

    font-weight: bold;
    /* border: 1px solid black; */
    display: flex;
    justify-content: start;
  }
  .city-block-container {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid ${(props) =>
      props.theme === "light" ? "gray" : "white"}; */
    margin: 0;

    /* border-radius: 8px; */
    /* margin-top: 15px; */
    padding: 5px;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86%;

    color: ${(props) => (props.theme === "light" ? "black" : "white")};
  }
  .sub-content {
    width: 150px;
    height: 150px;
    /* background: yellow; */
  }
  .header-container {
    height: 10%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: white;
    background: black;
    font-weight: bold;
  }
  .selected-container {
    background: ${(props) => (props.theme === "light" ? "#d6d6d6" : "#242323")};
  }
  .selected-fav-container {
    color: gold;
  }

  @media (max-width: 768px) {
    .cities-list {
      width: 20%;
      height: 80%;
    }

    .city-content {
      width: 20%;
      height: 82%;
      /* background: powderblue; */

      /* border-radius: 8px; */
    }
    .cities-container {
      gap: 10px;
      margin-left: 0;
    }
  }
`;
