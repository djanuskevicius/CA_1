import { useState } from 'react';
import LogInForm from '../LogInForm/LogInForm';
import Button from '../../atoms/Button';
import Modal from '../../molecules/Modal/Modal';
import { languageState } from '../../../shared/state/atoms';
import { useRecoilValue } from 'recoil';
import TEXTS from '../../../shared/texts/TEXTS';

const LogInButton = () => {
  const [isLogInFormOpen, setIsLogInFormOpen] = useState(false);
  const openLogInFormModal = () => setIsLogInFormOpen(true);
  const closeLogInFormModal = () => setIsLogInFormOpen(false);
  const language = useRecoilValue(languageState);
  return (
    <div>
      <Button
        text={TEXTS.menu.login[language]}
        color='info'
        action={openLogInFormModal}
      />
      {isLogInFormOpen && (
        <Modal onClose={closeLogInFormModal}>
          <LogInForm closeModal={closeLogInFormModal} />
        </Modal>
      )}
    </div>
  );
};
export default LogInButton;
