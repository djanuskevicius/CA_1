import TEXTS from "../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../shared/state/atoms";
import { StyledSection, StyledHeadline, StyledTodosContainer } from "./styles";
import LogOutButton from "../../components/organisms/LogOutButton";
import TodoCard from "../../components/atoms/TodoCard";
import AddButton from "../../components/atoms/AddButton";

const TodoListPage = () => {
  const language = useRecoilValue(languageState);

  return (
    <StyledSection>
      <StyledHeadline>{TEXTS.page.todoListPage.title[language]}</StyledHeadline>

      <StyledTodosContainer>
        <TodoCard />
      </StyledTodosContainer>
      <AddButton />
    </StyledSection>
  );
};

export default TodoListPage;
