import TEXTS from '../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';
import AboutApp from '../../components/molecules/AboutApp/AboutApp';

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <section>
      <AboutApp />

      <div>SignUpForm component displayed on modal or desktop view</div>

      <div>LOG IN BUTTON</div>

      <div>SIGN UP BUTTON</div>
    </section>
  );
};

export default HomePage;
