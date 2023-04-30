import TEXTS from "../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../shared/state/atoms";
import AboutApp from "../../components/molecules/AboutApp/AboutApp";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import { StyledSection, StyledAboutSignUpContainer } from "./styles";
import SignUpButton from "../../components/organisms/SignUpButton/SignUpButton";

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <StyledSection>
      <StyledAboutSignUpContainer>
        <AboutApp />
        <SignUpForm />
      </StyledAboutSignUpContainer>


      <div>LOG IN BUTTON</div>

      <div>
        <SignUpButton />
      </div>
    </StyledSection>
  );
};

export default HomePage;
