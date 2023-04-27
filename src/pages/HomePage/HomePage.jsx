
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';
import AboutApp from '../../components/molecules/AboutApp/AboutApp';
import SignUpForm from '../../components/organisms/SignUpForm/SignUpForm';



const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <section>
      <AboutApp />
      
      

      <div><SignUpForm/></div>

      <div>LOG IN BUTTON</div>

      <div>SIGN UP BUTTON</div>
    </section>
  );
};

export default HomePage;
