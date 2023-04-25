import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm, StyledFormControl, StyledLabel,StyledFormContainer } from './styles';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <StyledForm onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
    <StyledFormControl>
      <StyledLabel htmlFor='name'>Name:</StyledLabel>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name...'
        required
      />

      <StyledLabel htmlFor='surname'>Surname:</StyledLabel>
      <input
        type='text'
        id='surname'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder='Surname...'
      />

      <StyledLabel htmlFor='email'>Email:</StyledLabel>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='example@example.com'
        required
      />

      <StyledLabel htmlFor='password'>Password:</StyledLabel>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password...'
        required
      />
    </StyledFormControl>
    <StyledFormControl>
      <button type='submit'>Sign Up</button>
    </StyledFormControl>
  </StyledForm></StyledFormContainer>
    
  );
};

export default SignUpForm;
