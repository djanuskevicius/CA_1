import TEXTS from "../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../shared/state/atoms";
import { StyledSection } from "./styles";

const TodoListPage = () => {
  const language = useRecoilValue(languageState);

  return (
    <StyledSection>
      <h1>{TEXTS.page.todoListPage.title[language]}</h1>
    </StyledSection>
  );
};

export default TodoListPage;
