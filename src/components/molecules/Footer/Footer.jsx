import React from "react";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>© All rights reserved | {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};
