import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.palette.purple.main};
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  height: 80vh;
`;

export const StyledHeadline = styled.h1`
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;

export const StyledTodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 10px auto;
    width: 100%;
  }
`;

export const StyledTodosContainer = styled.div`
  width: 100%;
`;
