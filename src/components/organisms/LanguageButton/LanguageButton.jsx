import { useState } from "react";
import { useRecoilState } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import TEXTS from "../../../shared/texts/TEXTS";

import Button from "../../atoms/Button";

const LanguageButton = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const changeLanguage = (lang) => setLanguage(lang);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {isToggled ? (
        <Button
          text={TEXTS.menu.language.lithuanian[language]}
          color="info"
          action={() => {
            changeLanguage("lt");
            setIsToggled(!isToggled);
          }}
        ></Button>
      ) : (
        <Button
          text={TEXTS.menu.language.english[language]}
          color="info"
          action={() => {
            changeLanguage("en");
            setIsToggled(!isToggled);
          }}
        ></Button>
      )}
    </div>
  );
};
export default LanguageButton;
