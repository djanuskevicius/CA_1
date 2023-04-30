import styled from "styled-components";

export const StyledTodoContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.purple.dark};
  min-width: 400px;
  min-height: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledTodoHeader = styled.h1`
  text-align: center;
  color: white;
  font-weight: 200;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;

  h2 {
    color: white;
    font-weight: 200;
  }

  input {
    margin-bottom: 20px;
    max-width: 200px;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }

  input,
  select,
  textarea:focus {
    outline: none;
  }

  textarea {
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
  }

  select {
    border: none;
    border-radius: 5px;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    width: 30%;
  }
`;
