import { useState } from 'react';


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

const Form = ({ inputs, handleSubmit }) => {
  const [notValid, setNotValid] = useState([]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
    } else {
      setNotValid(NotValid);
    }
  };

  const language = useRecoilValue(languageState);

  return (
    <StyledFormContainer>
      <Box><StyledForm onSubmit={validateSubmit}>
      <h1>{TEXTS.page.signUpForm.title[language]}</h1>
        
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
      <Button color='info' action={() => {}} text={TEXTS.page.signUpForm.button[language]} type='submit' />
    </StyledFormControlBtn>
  </StyledForm>
    </Box>
      </StyledFormContainer>
    
  );
};

export default Form;



  //     <StyledFormContainer>
  //       <Box><StyledForm onSubmit={handleSubmit}>
  //     <h1>{TEXTS.page.signUpForm.title[language]}</h1>
  //     <StyledFormControl>
  //       <StyledLabel htmlFor='name'>{TEXTS.page.signUpForm.name[language]}</StyledLabel>
  //       <input
  //         type='text'
  //         id='name'
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         placeholder={TEXTS.page.signUpForm.name.placeholder[language]}
  //         required
  //       />
  
  //       <StyledLabel htmlFor='surname'>{TEXTS.page.signUpForm.surname[language]}</StyledLabel>
  //       <input
  //         type='text'
  //         id='surname'
  //         value={surname}
  //         onChange={(e) => setSurname(e.target.value)}
  //         placeholder={TEXTS.page.signUpForm.surname.placeholder[language]}
  //       />
  
  //       <StyledLabel htmlFor='email'>{TEXTS.page.signUpForm.email[language]}</StyledLabel>
  //       <input
  //         type='email'
  //         id='email'
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         placeholder={TEXTS.page.signUpForm.email.placeholder[language]}
  //         required
  //       />
  
  //       <StyledLabel htmlFor='password'>{TEXTS.page.signUpForm.password[language]}</StyledLabel>
  //       <input
  //         type='password'
  //         id='password'
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         placeholder={TEXTS.page.signUpForm.password.placeholder[language]}
  //         required
  //       />
  //     </StyledFormControl>
  //     <StyledFormControl>
  //       <button type='submit'>{TEXTS.page.signUpForm.button[language]}</button>
  //     </StyledFormControl>
  //   </StyledForm></Box>
        
  //     </StyledFormContainer>
        
  //   );
  // };