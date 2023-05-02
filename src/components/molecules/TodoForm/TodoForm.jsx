import { useState } from 'react';
import {
  StyledTodoContainer,
  StyledTodoHeader,
  StyledForm,
  StyledButton,
  StyledWarning,
} from './styles';

import TEXTS from '../../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../../shared/state/atoms';
import Button from '../../atoms/Button/Button';

import axios from 'axios';

const TodoForm = ({}) => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    status: '',
    userId: '',
  });

  const language = useRecoilValue(languageState);

  const handleSubmit = () => {
    todo['userId'] = parseInt(localStorage.userId);

    axios
      .post('http://localhost:8000/todos', todo)
      .then((response) => {
        localStorage.setItem('todoId', response.data.id);
        window.location.href = '/todos';
      })
      .catch((err) => {
        console.log(err);
      });
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

  const emptyValidation = () => {
    if (todo.title === '' || null) {
      setValid();
    } else if (todo.status === '' || null) {
      statusValidation();
    } else {
      return handleSubmit();
    }
  };

  return (
    <StyledTodoContainer>
      <StyledTodoHeader>{TEXTS.form.title[language]}</StyledTodoHeader>
      <StyledForm status={toggle} selectStatus={statusToggle}>
        <label>
          <h2>{TEXTS.form.taskTitle[language]}</h2>
        </label>
        <input
          maxLength={20}
          placeholder={TEXTS.form.optionOne[language]}
          name='title'
          value={todo.title}
          onChange={handleChange}
          required
        />
        {toggle ? (
          <StyledWarning>{TEXTS.form.validationTitle[language]}</StyledWarning>
        ) : null}
        <label>
          <h2>{TEXTS.form.taskDescription[language]}</h2>
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
          <h2>{TEXTS.form.taskStatus[language]}</h2>
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
          action={emptyValidation}
          text={TEXTS.form.button[language]}
          color='primary'
        ></Button>
      </StyledButton>
    </StyledTodoContainer>
  );
};

export default TodoForm;
