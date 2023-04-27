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
`;
