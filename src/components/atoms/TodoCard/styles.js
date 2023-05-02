import styled from 'styled-components';

export const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-height: 60vh;
  width: 100%;
  padding: 40px;
  margin: auto;
  background: transparent;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.purple.light};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.palette.purple.semiDark};
  }

  @media screen and (min-width: 1280px) {
    width: fit-content;
    gap: 20px;
  }
`;

export const StyledTodoCard = styled.div`
  cursor: pointer;
  min-width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.purple.semiDark};
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    max-width: 580px;
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 500px;
    width: 100%;
  }
`;

export const StyledTodoIcon = styled.div`
  color: ${({ theme }) => theme.palette.purple.white};

  @media screen and (min-width: 600px) {
    font-size: 20px;
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const StyledTodoTitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
`;

export const StyledTodoTitle = styled.h3`
  color: ${({ theme }) => theme.palette.purple.white};

  @media screen and (min-width: 600px) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 33px;
  }
`;

export const StyledTodoDescriptionSection = styled.div`
  /* display: flex; */
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.purple.white};
  opacity: 0.7;
  border-radius: 0px 0px 10px 10px;
`;

export const StyledTodoDescription = styled.div`
  cursor: initial;
  color: ${({ theme }) => theme.palette.dark.main};
  padding: 15px;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const StyledTextButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDescriptionButtons = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const StyledActionButtons = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 20px;

  @media screen and (min-width: 600px) {
    padding: 10px;
    font-size: 25px;
  }
`;
