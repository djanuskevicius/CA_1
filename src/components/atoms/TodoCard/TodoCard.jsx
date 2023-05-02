import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ICONS from '../../../shared/icons';
import Modal from '../../molecules/Modal/Modal';
import TodoEditForm from '../../molecules/TodoEditForm/TodoEditForm';
import {
  StyledTodoCard,
  StyledTodoTitle,
  StyledTodoIcon,
  StyledTodoTitleSection,
  StyledTodoDescriptionSection,
  StyledTodoDescription,
  StyledTextButtons,
  StyledDescriptionButtons,
  StyledActionButtons,
} from './styles';

const TodoCard = () => {
  const { data: todos, refetch } = useQuery(['todos'], async () => {
    const { data } = await axios.get('http://localhost:8000/todos');
    const currentUserId = parseInt(localStorage.userId);
    const filterTodos = data.filter((x) => x.userId === currentUserId);

    return filterTodos;
  });

  const [expandedTodoId, setExpandedTodoId] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const toggleAccordion = (id) => {
    setExpandedTodoId((prev) => (prev === id ? null : id));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/todos/${id}`, {
        status: 'Done',
      });
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const getIcon = (status) => {
    switch (status) {
      case 'In progress':
      case 'Pradėta':
        return ICONS.clock;
      case 'Done':
      case 'Baigta':
        return ICONS.done;
      case 'To Do':
      case 'Ne pradėta':
        return ICONS.start;
      default:
        return null;
    }
  };

  return (
    <div>
      {todos?.map((todo) => (
        <StyledTodoCard key={todo.id}>
          <div onClick={() => toggleAccordion(todo.id)}>
            <StyledTodoTitleSection>
              <StyledTodoIcon>{getIcon(todo.status)}</StyledTodoIcon>
              <StyledTodoTitle>{todo.title}</StyledTodoTitle>
            </StyledTodoTitleSection>
          </div>
          <StyledTodoDescriptionSection>
            {expandedTodoId === todo.id && (
              <StyledTodoDescription>
                <StyledTextButtons>
                  <li>{todo.description}</li>
                  <StyledDescriptionButtons>
                    <StyledActionButtons onClick={openForm}>
                      {ICONS.edit}
                    </StyledActionButtons>
                    {isFormOpen && (
                      <Modal onClose={closeForm}>
                        <TodoEditForm id={todo.id} closeModal={closeForm} />
                      </Modal>
                    )}
                    <StyledActionButtons onClick={() => handleDelete(todo.id)}>
                      {ICONS.delete}
                    </StyledActionButtons>
                    <StyledActionButtons
                      onClick={() => handleComplete(todo.id)}
                    >
                      {ICONS.check}
                    </StyledActionButtons>
                  </StyledDescriptionButtons>
                </StyledTextButtons>
              </StyledTodoDescription>
            )}
          </StyledTodoDescriptionSection>
        </StyledTodoCard>
      ))}
    </div>
  );
};

export default TodoCard;
