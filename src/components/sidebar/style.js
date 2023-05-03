import styled from "styled-components";

const SideBarStyled = styled.div`
  .sidebar-container {
    color: white;
    width: 200px;
    height: 100vh;
    margin: 0;
    background: ${(props) => (props.theme === "light" ? "#1c1c1c" : "black")};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 0;

    position: static;
    /* border: 1px solid red; */
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

    padding-bottom: 50px;
    color: white;
    /* border: 1px solid red; */
  }
  .title-content:hover {
    cursor: pointer;
  }
  .theme {
    display: flex;
    gap: 10px;
    padding: 8px;
    margin-bottom: 20px;
    justify-content: center;
    /* border: 1px solid red; */
  }

  @media (max-width: 768px) {
    .sidebar-container {
      width: 100%;
      height: 12vh;
      flex-direction: row;
    }
    .container-one {
      display: flex;
      align-items: stretch;
      justify-content: start;
      gap: 10px;
      margin-left: 10px;
    }

    .menu-container {
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid red; */
    }
    .title {
      padding-bottom: 0;
      height: 100%;
    }
    .theme {
      align-items: center;
      margin-top: 0;
      width: 200px;
      margin-bottom: 0;
      font-size: smaller;
      margin-left: 20px;
    }
    .Btn-container {
      height: 100%;
      width: 100px;
    }
    .title h2 {
      font-size: 18px;
    }
    .selected-tab-container {
      border-bottom: 2px solid violet;
      background-color: ${(props) => (props.theme === "light" ? "black" : "")};
    }
  }
`;

export default SideBarStyled;
