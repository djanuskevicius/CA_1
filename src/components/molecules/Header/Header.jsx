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
} from './styles';
import LogOutButton from '../../organisms/LogOutButton';
import { isLoggedIn } from '../../../auth/ProtectedRoute/auth';
import LogInButton from '../../organisms/LogInButton/LogInButton';
import SignUpButton from '../../organisms/SignUpButton/SignUpButton';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src='./logo.png' alt='Logo' />
      </StyledLogo>
      <StyledContainer>
        {isLoggedIn() ? (
          <LogOutButton />
        ) : (
          <>
            <LogInButton /> <SignUpButton />
          </>
        )}
        <LanguageButton />
      </StyledContainer>
    </StyledHeader>
  );
};
