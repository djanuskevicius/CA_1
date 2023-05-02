import styled from "styled-components";

export const StyledFormContainer = styled.div`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    width: 100%;
    display: block;
  }
`;

export const StyledForm = styled.form`
  h1 {
    text-align: center;
    font-size: 1.5em;
  }
  input {
    color: ${({ theme }) => theme.palette.purple.white};
  }
`;

export const StyledFormControl = styled.div`
  margin-bottom: 0.75rem;

  button {
    text-align: center;
  }
`;

export const StyledFormControlBtn = styled.div`
  margin-bottom: 0.75rem;
  text-align: center;

  button {
    width: 50%;
    margin-top: 20px;
    padding: 15px;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.palette.purple.white};
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.danger.main};
  font-size: 0.7rem;
  font-weight: 400;
`;
