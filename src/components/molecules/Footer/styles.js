import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 10vh;
  padding: 30px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.purple.dark};
  margin-top: auto;
  color: ${({ theme }) => theme.palette.purple.white};
`;
