import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.palette.purple.main};
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  height: 85vh;
`;

export const StyledHeadline = styled.h1`
  text-align: center;
  font-size: 30px;
`;

export const StyledTodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 630px) {
    align-items: center;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
