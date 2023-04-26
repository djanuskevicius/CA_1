import React, { useState } from 'react';
import axios from 'axios';

import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil'
import TEXTS from '../../../shared/texts/TEXTS';




import Form from '../../molecules/Form';
import ICONS from '../../../shared/icons';



const SignUpForm = ({ closeModal }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [registration, setRegistration] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    todos: [],
    
    
  });

  const language = useRecoilValue(languageState);

  const inputs = [
    {
      type: 'text',
      label: `${TEXTS.page.signUpForm.name[language]}`,
      placeholder: `${TEXTS.page.signUpForm.name.placeholder[language]}`,
      icon: ICONS.user,
      value: registration.name,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
    {
      type: 'text',
      label: `${TEXTS.page.signUpForm.surname[language]}`,
      placeholder: `${TEXTS.page.signUpForm.surname.placeholder[language]}`,
      icon: ICONS.user,
      value: registration.surname,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, surname: value })),
      required: false,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
    {
      type: 'email',
      label: `${TEXTS.page.signUpForm.email[language]}`,
      placeholder: `${TEXTS.page.signUpForm.email.placeholder[language]}`,
      icon: ICONS.envelope,
      value: registration.email,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
    {
      type: 'password',
      label: `${TEXTS.page.signUpForm.password[language]}`,
      placeholder: `${TEXTS.page.signUpForm.password.placeholder[language]}`,
      icon: ICONS.lock,
      value: registration.password,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
  ];

  const handleSubmit = () => {
    // 1. Sending data to API
    axios
      .post('http://localhost:8000/users', registration)
      .then((response) => {
        localStorage.setItem('userId', response.data.id);
        window.location.href = '/todos';
      })
      .catch((error) => console.log(error));

    
    // 2. If request was successfull, closing modal
    setSuccessMessage('Form submited successfully!');

    if (closeModal) {
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
};

  if (successMessage) {
    return (
      <p>
        {ICONS.check} {successMessage}
      </p>
    );
  }

  return <Form inputs={inputs} handleSubmit={handleSubmit} />;
};

export default SignUpForm;

