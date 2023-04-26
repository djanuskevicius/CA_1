import TEXTS from "../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../shared/state/atoms";
import AboutApp from "../../components/molecules/AboutApp/AboutApp";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import SignUpButton from "../../components/organisms/SignUpButton/SignUpButton";

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <section>
      <AboutApp />

      <div>
        <SignUpForm />
      </div>

      <div>LOG IN BUTTON</div>

      <div>
        <SignUpButton />
      </div>
    </section>
  );
};

export default HomePage;
