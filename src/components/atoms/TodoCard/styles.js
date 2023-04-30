import styled from 'styled-components';

export const StyledTodoCard = styled.div`
  min-width: 280px;
  width: 100%;
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.purple.semiDark};

  @media screen and (min-width: 600px) {
    max-width: 580px;
  }

  @media screen and (min-width: 768px) {
    max-width: 950px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 400px;
  }
`;

export const StyledTodoIcon = styled.div`
  color: ${({ theme }) => theme.palette.purple.white};
  /* color: ${({ color }) => color}; */

  @media screen and (min-width: 600px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const StyledTodoHeader = styled.h3`
  color: ${({ theme }) => theme.palette.purple.white};

  @media screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const StyledTodoDescription = styled.p`
  color: ${({ theme }) => theme.palette.purple.white};
  opacity: 0.7;

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;
