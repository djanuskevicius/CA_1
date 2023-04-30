import TEXTS from '../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';
import AboutApp from '../../components/molecules/AboutApp/AboutApp';
import SignUpForm from '../../components/organisms/SignUpForm/SignUpForm';
import { StyledSection, StyledAboutSignUpContainer, StyledAboutAppButtons, StyledAboutSignUpForm } from './styles';
import SignUpButton from '../../components/organisms/SignUpButton/SignUpButton';
import LogInButton from '../../components/organisms/LogInButton/';
import { isLoggedIn } from '../../auth/ProtectedRoute/auth';

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <StyledSection>
      <StyledAboutSignUpContainer>
        <AboutApp />
        {isLoggedIn() ? <></> : <StyledAboutSignUpForm><SignUpForm /></StyledAboutSignUpForm>}
      </StyledAboutSignUpContainer>
      <StyledAboutAppButtons>
        <LogInButton />
        <SignUpButton />
      </StyledAboutAppButtons>
    </StyledSection>
  );
};

export default HomePage;
