import React from 'react';
import ICONS from '../../../shared/icons';
import { StyledTodoCard, StyledTodoIcon, StyledTodoHeader, StyledTodoDescription } from './styles';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const TodoCard = () => {
  const { data: todos } = useQuery(['todos'], async () => {
    const { data } = await axios.get('http://localhost:8000/todos');
    return data;
  });

  const getIcon = (status) => {
    if (status === 'In progress') {
      return ICONS.clock;
    } else if (status === 'Done') {
      return ICONS.done;
    }
  };

  return (
    <div>
      {todos?.map(todo => (
        <StyledTodoCard key={todo.id}>
          <StyledTodoIcon>
            {getIcon(todo.status)}
          </StyledTodoIcon>
          <div>
            <StyledTodoHeader>{todo.title}</StyledTodoHeader>
            <StyledTodoDescription>{todo.description}</StyledTodoDescription>
          </div>
        </StyledTodoCard>
      ))}
    </div>
  );
};

export default TodoCard;
