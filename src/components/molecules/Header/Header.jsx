import React from 'react';
import TEXTS from '../../../shared/texts/TEXTS';
import { useRecoilState } from 'recoil';
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

export const Header = () => {
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
        <LanguageButton />
      </StyledContainer>
    </StyledHeader>
  );
};
