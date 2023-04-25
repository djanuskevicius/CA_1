import TEXTS from '../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';
import AboutApp from '../../components/molecules/AboutApp/AboutApp';

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <section>
      <AboutApp />
    </section>
  );
};

export default HomePage;
