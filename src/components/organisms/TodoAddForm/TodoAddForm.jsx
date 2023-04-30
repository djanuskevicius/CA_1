import { useState } from "react";
import { StyledTaskForm } from "./styles";
import TodoCard from "../../atoms/TodoCard/TodoCard";
import axios from "axios";
import ICONS from "../../../shared/icons";

import Form from "../../molecules/Form";

const TodoAddForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const inputs = [
    {
      type: "text",
      label: "Todo title",
      placeholder: "Todo title",
      value: todo.title,
      setValue: (value) => setTodo((prev) => ({ ...prev, title: value })),
      required: true,
    },
    {
      type: "text",
      label: "Todo description",
      placeholder: "Todo description",
      value: todo.description,
      setValue: (value) => setTodo((prev) => ({ ...prev, description: value })),
      required: true,
    },
    {
      type: "checkbox",
      label: "Status",
    },
  ];

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/todos", todo)
      .then((response) => {
        localStorage.setItem("todoId", response.data.id);
        window.location.href = "/todos";
      })
      .catch((err) => {
        console.log(err);
      });

    setSuccessMessage("Task added successfully!");

    if (closeModal) {
      setTimeout(() => {
        closeModal();
      }, 5000);
    }
  };
  if (successMessage) {
    return (
      <p>
        {ICONS.check} {successMessage}
      </p>
    );
  }

  return <Form inputs={inputs} handleSubmit={handleSubmit} />;
};

export default TodoAddForm;
