import styled from "styled-components";

const SideBarStyled = styled.div`
  .sidebar-container {
    color: white;
    width: 200px;
    height: 87vh;
    margin: 0;
    background: ${(props) => (props.theme === "light" ? "#1c1c1c" : "black")};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 0;
    padding-top: 30px;
    position: static;
  }
  .Btn-container {
    width: 100%;

    margin-left: 0;
    margin-right: 0;

    padding: 5px;
    border-style: none;
    height: 40px;
    color: white;
    background-color: inherit;
  }

  .selected-tab-container {
    background-color: ${(props) =>
      props.theme === "light" ? "black" : "gray"};
  }
  .title {
    height: 5vh;
    display: flex;
    background-color: ${(props) =>
      props.theme === "light" ? "#1c1c1c" : "black"};
    justify-content: center;

    padding-bottom: 30px;
    color: white;
  }
  .title-content:hover {
    cursor: pointer;
  }
`;

export default SideBarStyled;
