import React from "react";
import { StyledFooter } from "./styles";
import TEXTS from "../../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../shared/state/atoms";

export const Footer = () => {
  const language = useRecoilValue(languageState);

  return (
    <StyledFooter>
      <p>
        {TEXTS.page.homePage.footer[language]} | {new Date().getFullYear()}
      </p>
    </StyledFooter>
  );
};
