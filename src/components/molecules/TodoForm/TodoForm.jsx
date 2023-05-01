import { useState } from "react";
import {
  StyledTodoContainer,
  StyledTodoHeader,
  StyledForm,
  StyledButton,
} from "./styles";

import TEXTS from "../../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../shared/state/atoms";

import axios from "axios";

const TodoForm = ({}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
    userId: "",
  });

  const language = useRecoilValue(languageState);

  const handleSubmit = () => {
    todo["userId"] = parseInt(localStorage.userId);

    axios
      .post("http://localhost:8000/todos", todo)
      .then((response) => {
        localStorage.setItem("todoId", response.data.id);
        window.location.href = "/todos";
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

  return (
    <StyledTodoContainer>
      <StyledTodoHeader>{TEXTS.form.title[language]}</StyledTodoHeader>
      <StyledForm>
        <label>
          <h2>{TEXTS.form.taskTitle[language]}</h2>
        </label>
        <input
          required
          maxLength={20}
          placeholder="Your task goes here"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />{" "}
        <label>
          <h2>{TEXTS.form.taskDescription[language]}</h2>
        </label>
        <textarea
          required
          maxLength={200}
          placeholder="Your description goes here"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
        <label>
          <h2>{TEXTS.form.taskStatus[language]}</h2>
        </label>
        <select
          required
          name="status"
          value={todo.status}
          onChange={handleChange}
        >
          <option></option>
          <option>To Do</option>
          <option>In progress</option>
          <option>Done</option>
        </select>
      </StyledForm>
      <StyledButton>
        <button onClick={handleSubmit}> add item</button>
      </StyledButton>
    </StyledTodoContainer>
  );
};

export default TodoForm;
