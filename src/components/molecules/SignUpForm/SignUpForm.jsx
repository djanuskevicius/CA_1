import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm, StyledFormControl, StyledLabel,StyledFormContainer } from './styles';
import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil'
import TEXTS from '../../../shared/texts/TEXTS';
import Box from '../../atoms/Box/Box';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const language = useRecoilValue(languageState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, surname, email, password, todos: [] };
    axios
      .post('http://localhost:8000/users', userData)
      .then((response) => {
        localStorage.setItem('userId', response.data.id);
        window.location.href = '/todo-list';
      })
      .catch((error) => console.log(error));
  };

  return (
    <StyledFormContainer>
      <Box><StyledForm onSubmit={handleSubmit}>
    <h1>{TEXTS.page.signUpForm.title[language]}</h1>
    <StyledFormControl>
      <StyledLabel htmlFor='name'>{TEXTS.page.signUpForm.name[language]}</StyledLabel>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={TEXTS.page.signUpForm.name.placeholder[language]}
        required
      />

      <StyledLabel htmlFor='surname'>{TEXTS.page.signUpForm.surname[language]}</StyledLabel>
      <input
        type='text'
        id='surname'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder={TEXTS.page.signUpForm.surname.placeholder[language]}
      />

      <StyledLabel htmlFor='email'>{TEXTS.page.signUpForm.email[language]}</StyledLabel>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={TEXTS.page.signUpForm.email.placeholder[language]}
        required
      />

      <StyledLabel htmlFor='password'>{TEXTS.page.signUpForm.password[language]}</StyledLabel>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={TEXTS.page.signUpForm.password.placeholder[language]}
        required
      />
    </StyledFormControl>
    <StyledFormControl>
      <button type='submit'>{TEXTS.page.signUpForm.button[language]}</button>
    </StyledFormControl>
  </StyledForm></Box>
      
    </StyledFormContainer>
      
  );
};

export default SignUpForm;
