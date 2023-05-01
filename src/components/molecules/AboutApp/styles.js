import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h1 {
    color: ${({ theme }) => theme.palette.purple.white};
    text-align: center;
  }
`;

export const StyledHeader = styled.h1`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 36px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 60px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.palette.purple.white};
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 200;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  opacity: 0.8;
  margin-top: 10px;
`;
