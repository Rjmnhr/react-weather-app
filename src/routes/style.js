import styled from "styled-components";

export const RouteStyled = styled.div`
  .container {
    background: ${(props) => (props.theme === "light" ? "white" : "#1c1c1c")};
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .right-container {
      padding-right: 20px;
    }
  }
`;
