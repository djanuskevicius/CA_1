import TEXTS from '../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';
import { StyledSection, StyledHeadline } from './styles';
import LogOutButton from '../../components/organisms/LogOutButton';
import TodoCard from '../../components/atoms/TodoCard';

const TodoListPage = () => {
  const language = useRecoilValue(languageState);

  return (
    <StyledSection>
      <StyledHeadline>{TEXTS.page.todoListPage.title[language]}</StyledHeadline>

      <TodoCard />
    </StyledSection>
  );
};

export default TodoListPage;
