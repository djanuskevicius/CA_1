import React, { useState } from 'react';
import axios from 'axios';

import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil';
import TEXTS from '../../../shared/texts/TEXTS';

import Form from '../../molecules/Form/LoginFormValid';
import ICONS from '../../../shared/icons';

const LoginForm = (closeModal) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const language = useRecoilValue(languageState);

  const inputs = [
    {
      type: 'email',
      label: `${TEXTS.page.signUpForm.email[language]}`,
      placeholder: `${TEXTS.page.signUpForm.email.placeholder[language]}`,
      icon: ICONS.envelope,
      value: login.email,
      setValue: (value) => setLogin((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
    {
      type: 'password',
      label: `${TEXTS.page.signUpForm.password[language]}`,
      placeholder: `${TEXTS.page.signUpForm.password.placeholder[language]}`,
      icon: ICONS.lock,
      value: login.password,
      setValue: (value) => setLogin((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: `${TEXTS.page.signUpForm.required[language]}`,
    },
  ];

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users`);

      if (response.data.length === 0) {
        alert(`${TEXTS.page.loginForm.validate[language]}`);
      } else {
        const user = response.data.find((x) => x.email === login.email);
        localStorage.setItem('userId', user.id);
        window.location.href = '/todos';
      }
    } catch (error) {
      console.log(error);
    }

    setSuccessMessage('Logged in  successfully!');
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

export default LoginForm;
