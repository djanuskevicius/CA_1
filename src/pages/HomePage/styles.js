import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.palette.purple.main};
  /* height: 80vh; */
`;

export const StyledAboutSignUpContainer = styled.div`
  @media screen and (min-width: 1027px) {
    display: flex;
  }
`;

export const StyledAboutAppButtons = styled.div`
  text-align: center;
  button {
    margin-bottom: 20px;
    width: 50%;
  }

  @media screen and (min-width: 1027px) {
    display: none;
  }
`;

export const StyledAboutSignUpForm = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.purple.white};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
