import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil';
import TEXTS from '../../../shared/texts/TEXTS';

const LogOutButton = () => {
  const language = useRecoilValue(languageState);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  }

  return (
    <Button
      action={handleLogout}
      text={TEXTS.menu.logout[language]}
      color='primary'
    />
  );
};

export default LogOutButton;
