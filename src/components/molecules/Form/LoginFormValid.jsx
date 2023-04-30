import { useState } from 'react';
import axios from 'axios';


import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil'
import TEXTS from '../../../shared/texts/TEXTS';
import Box from '../../atoms/Box/Box';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {
  StyledForm,
  StyledFormControl,
  StyledLabel,
  StyledErrorMessage,
  StyledFormContainer,
  StyledFormControlBtn,
} from './styles';

const LoginFormValid = ({ inputs, handleSubmit }) => {

  const [notValid, setNotValid] = useState([]);

  const validateSubmit = async (e) => {
    e.preventDefault();


    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);



      const email = inputs.find((input) => input.type === 'email').value;
      const password = inputs.find((input) => input.type === 'password').value;


      axios.get(`http://localhost:8000/users?email=${email}&password=${password}`)
        .then((response) => {

          if (response.data.length === 0) {
            alert(`${TEXTS.page.loginForm.validate[language]}`)
          } else {
            handleSubmit();

          }

        })
        .catch((error) => console.log(error))




    };
  }

  const language = useRecoilValue(languageState);

  return (
    <StyledFormContainer>
      <Box><StyledForm onSubmit={validateSubmit}>
        <h1>{TEXTS.page.loginForm.title[language]}</h1>

        {inputs.map((input) => (

          <StyledFormControl key={input.label}>
            <StyledLabel>{input.label}</StyledLabel>
            <Input
              type={input.type}
              icon={input.icon}
              value={input.value}
              setValue={input.setValue}
              placeholder={input.placeholder}
              color='secondary'
            />
            {notValid.find((x) => x.label === input.label) && (
              <StyledErrorMessage>{input.errorMessage}</StyledErrorMessage>
            )}
          </StyledFormControl>
        ))}
        <StyledFormControlBtn>
          <Button color='info' action={() => { }} text={TEXTS.page.loginForm.button[language]} type='submit' />
        </StyledFormControlBtn>
      </StyledForm>
      </Box>
    </StyledFormContainer>

  );
};

export default LoginFormValid;
