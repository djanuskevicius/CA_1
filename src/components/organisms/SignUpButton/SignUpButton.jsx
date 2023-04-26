import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import Button from "../../atoms/Button";
import Modal from "../../molecules/Modal/Modal";
import { languageState } from "../../../shared/state/atoms";
import { useRecoilValue } from "recoil";
import TEXTS from "../../../shared/texts/TEXTS";
const SignUpButton = () => {
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const openSignUpFormModal = () => setIsSignUpFormOpen(true);
  const closeSignUpFormModal = () => setIsSignUpFormOpen(false);
  const language = useRecoilValue(languageState);
  return (
    <div>
      <Button
        text={TEXTS.page.signUpForm.title[language]}
        color="info"
        action={openSignUpFormModal}
      />
      {isSignUpFormOpen && (
        <Modal onClose={closeSignUpFormModal}>
          <SignUpForm closeModal={closeSignUpFormModal} />
        </Modal>
      )}
    </div>
  );
};
export default SignUpButton;
