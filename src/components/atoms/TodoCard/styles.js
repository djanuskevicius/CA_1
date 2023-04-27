import styled from 'styled-components';

export const StyledTodoCard = styled.div`
  max-width: 350px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  /* border: 2px solid ${({ theme }) => theme.palette.purple.dark}; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.purple.semiDark};
`;

export const StyledTodoIcon = styled.div`
  color: ${({ theme }) => theme.palette.purple.white};
`;

export const StyledTodoHeader = styled.h3`
  color: ${({ theme }) => theme.palette.purple.white};
`;

export const StyledTodoDescription = styled.p`
  color: ${({ theme }) => theme.palette.purple.white};
  opacity: 0.7;
`;
