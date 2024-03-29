import { useState } from "react";
import { StyledAddButton } from "./styles";
import ICONS from "../../../shared/icons";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import Modal from "../../molecules/Modal/Modal";
import TodoForm from "../../molecules/TodoForm/TodoForm";

const AddButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const language = useRecoilValue(languageState);

  return (
    <>
      <StyledAddButton onClick={openForm}>{ICONS.add} </StyledAddButton>
      {isFormOpen && (
        <Modal onClose={closeForm}>
          <TodoForm closeModal={closeForm} />
        </Modal>
      )}
    </>
  );
};

export default AddButton;
