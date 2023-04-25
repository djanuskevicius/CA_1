import React from "react";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>© all rights reserved | {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};
