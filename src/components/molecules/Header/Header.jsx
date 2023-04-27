import React from "react";
import TEXTS from "../../../shared/texts/TEXTS";
import { useRecoilState } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import { useState } from "react";
import LanguageButton from "../../organisms/LanguageButton";

import { StyledHeader, StyledLogo, StyledSelector } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src="./logo.png" alt="Logo" />
      </StyledLogo>
      <LanguageButton />
    </StyledHeader>
  );
};
