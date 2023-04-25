import styled from 'styled-components';

export const StyledFormContainer = styled.div`
max-width: 1024px;
margin: 0 auto;


`

export const StyledForm = styled.form`
  margin: 30px;
  background-color: #ecebeb;
  border-radius: 10px 10px 10px 10px;

  padding: 20px;

  h1 {
    text-align: center;
    font-size: 1.5em;
  }

  input {
    background-color: #d9d9d9;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 10px 10px 10px 10px;
    outline: none;
  }

  button {
    background-color: #d9d9d9;
    margin-top: 1rem;
    padding: 10px;
    border: none;
    width: 50%;
    border-radius: 10px 10px 10px 10px;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    
    
  }

  
`;

export const StyledFormControl = styled.div`
  margin-bottom: 0.75rem;
  text-align: center;

 
`;

export const StyledLabel = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.dark.main};
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
`;
