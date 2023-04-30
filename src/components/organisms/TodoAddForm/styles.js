import styled from "styled-components";

export const StyledTaskForm = styled.div`
  background-color: ${({ theme }) => theme.palette.purple.dark};
  width: 400px;
  height: 500px;
  max-width: 500px;
  color: white;
  padding: 20px;

  p {
    color: white;
  }
`;
