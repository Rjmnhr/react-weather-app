import styled from "styled-components";

export const CustomTagStyled = styled.div`
  p {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
  }
  .Add:hover {
    cursor: pointer;
  }
  p:hover {
    background-color: black;
    color: white;
    transition: 0.3s;
  }
`;
