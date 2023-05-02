import { useState } from 'react';
import {
  StyledTodoContainer,
  StyledTodoHeader,
  StyledForm,
  StyledButton,
  StyledWarning,
} from '../TodoForm/styles';

import TEXTS from '../../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../../shared/state/atoms';
import Button from '../../atoms/Button/Button';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const TodoEditForm = ({ id }) => {
  const { data: todos, refetch } = useQuery(['todos'], async () => {
    const { data } = await axios.get(`http://localhost:8000/todos`);
    const currentUserId = parseInt(localStorage.userId);
    const filterTodos = data.filter((x) => x.userId === currentUserId);

    return filterTodos;
  });

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    status: '',
    userId: '',
  });

  const language = useRecoilValue(languageState);

  const handleEdit = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/todos/${id}`, {
        title: todo.title,
        description: todo.description,
        status: todo.status,
      });
      refetch();
      window.location.href = '/todos';
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo((todo) => ({
      ...todo,
      [name]: value,
    }));
  };

  const [toggle, setToggle] = useState(false);

  const setValid = () => {
    setToggle(!toggle);
  };

  const [statusToggle, setStatusToggle] = useState(false);

  const statusValidation = () => {
    setStatusToggle(!statusToggle);
  };

  const emptyValidation = (id) => {
    if (todo.title === '' || null) {
      setValid();
    } else if (todo.status === '' || null) {
      statusValidation();
    } else {
      return handleEdit(id);
    }
  };

  return (
    <StyledTodoContainer>
      <StyledTodoHeader>{TEXTS.form.edit[language]}</StyledTodoHeader>
      <StyledForm>
        <label>
          <h2>{TEXTS.form.editTitle[language]}</h2>
        </label>
        <input
          required
          maxLength={20}
          placeholder={TEXTS.form.optionOne[language]}
          name='title'
          value={todo.title}
          onChange={handleChange}
        />
        {toggle ? (
          <StyledWarning>{TEXTS.form.validationTitle[language]}</StyledWarning>
        ) : null}
        <label>
          <h2>{TEXTS.form.editDescription[language]}</h2>
        </label>
        <textarea
          required
          maxLength={200}
          placeholder={TEXTS.form.optionTwo[language]}
          name='description'
          value={todo.description}
          onChange={handleChange}
        />
        <label>
          <h2>{TEXTS.form.editStatus[language]}</h2>
        </label>
        <select
          required
          name='status'
          value={todo.status}
          onChange={handleChange}
        >
          <option></option>
          <option>{TEXTS.form.selectOne[language]}</option>
          <option>{TEXTS.form.selectTwo[language]}</option>
          <option>{TEXTS.form.selectThree[language]}</option>
        </select>
        {statusToggle ? (
          <StyledWarning>{TEXTS.form.validationStatus[language]}</StyledWarning>
        ) : null}
      </StyledForm>
      <StyledButton>
        <Button
          action={() => {
            emptyValidation(id);
          }}
          text={TEXTS.form.edit[language]}
          color='primary'
        ></Button>
      </StyledButton>
    </StyledTodoContainer>
  );
};

export default TodoEditForm;
