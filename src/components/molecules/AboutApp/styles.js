import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  padding: 20px;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 36px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 60px;
  }
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 10px;
  text-align: left;

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
