import React from "react";
import TEXTS from "../../../shared/texts/TEXTS";
import { useRecoilState } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import { useState } from "react";

import { StyledHeader, StyledLogo, StyledSelector } from "./styles";

export const Header = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <StyledHeader>
      <StyledLogo>
        <img src="./logo.png" alt="Logo" />
      </StyledLogo>
      <StyledSelector>
        <ul>
          <li onClick={() => changeLanguage("lt")}>
            {" "}
            {TEXTS.menu.language.lithuanian[language]}{" "}
          </li>
          <li onClick={() => changeLanguage("en")}>
            {" "}
            {TEXTS.menu.language.english[language]}
          </li>
        </ul>
      </StyledSelector>
    </StyledHeader>
  );
};
