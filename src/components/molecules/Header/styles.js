import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.purple.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: ${({ theme }) => theme.palette.purple.light};
`;

export const StyledLogo = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;

  img {
    width: 100%;
  }
`;

export const StyledSelector = styled.div`
  width: 60px;
  height: 60px;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
`;
