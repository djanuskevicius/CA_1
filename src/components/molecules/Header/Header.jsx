import React from 'react';
import TEXTS from '../../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../../shared/state/atoms';
import { useState } from 'react';
import LanguageButton from '../../organisms/LanguageButton';

import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledSelector,
  StyledHeaderButtons,
  StyledSignUpButton,
} from './styles';
import LogOutButton from '../../organisms/LogOutButton';
import { isLoggedIn } from '../../../auth/ProtectedRoute/auth';
import LogInButton from '../../organisms/LogInButton/LogInButton';
import SignUpButton from '../../organisms/SignUpButton/SignUpButton';
import Logo from '../../atoms/Logo';
import NavigationButton from '../../atoms/NavigationButton';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const language = useRecoilValue(languageState);

  return (
    <StyledHeader>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledContainer>
        {isLoggedIn() ? (
          <LogOutButton />
        ) : (
          <StyledHeaderButtons>
            <LogInButton />
            <StyledSignUpButton>
              <SignUpButton />
            </StyledSignUpButton>
          </StyledHeaderButtons>
        )}
        {location.pathname !== '/todos' && isLoggedIn() && (
          <NavigationButton
            text={TEXTS.menu.todos[language]}
            location='/todos'
          />
        )}
        <LanguageButton />
      </StyledContainer>
    </StyledHeader>
  );
};
