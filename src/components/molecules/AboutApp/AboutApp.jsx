import React from 'react'
import TEXTS from '../../../shared/texts/TEXTS'
import { useRecoilValue } from 'recoil'
import { languageState } from '../../../shared/state/atoms'

const AboutApp = () => {
  const language = useRecoilValue(languageState);

  return (
    <div>
      <h1>{TEXTS.page.homePage.title[language]}</h1>
      <p>{TEXTS.page.homePage.description[language]}</p>
    </div>
  )
}

export default AboutApp