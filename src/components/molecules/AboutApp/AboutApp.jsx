import React from 'react'
import TEXTS from '../../../shared/texts/TEXTS'
import { useRecoilValue } from 'recoil'
import { languageState } from '../../../shared/state/atoms'
import { StyledContainer, StyledHeader, StyledText, StyledImage } from './styles'
import Box from '../../atoms/Box/Box'


const AboutApp = () => {
  const language = useRecoilValue(languageState);

  return (
    <StyledContainer>
      <Box>
        <StyledHeader>{TEXTS.page.homePage.title[language]}</StyledHeader>
        <StyledText>{TEXTS.page.homePage.description.paragraph1[language]}</StyledText>
        <StyledText>{TEXTS.page.homePage.description.paragraph2[language]}</StyledText>
        <StyledText>{TEXTS.page.homePage.description.paragraph3[language]}</StyledText>
        <StyledImage src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png" alt="to-do-list" />
      </Box>
    </StyledContainer>
  )
}

export default AboutApp