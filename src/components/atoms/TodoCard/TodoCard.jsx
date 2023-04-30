import React, { useState } from "react";
import ICONS from "../../../shared/icons";
import {
  StyledTodoCard,
  StyledTodoIcon, StyledTodoTitleSection,
  StyledTodoTitle, StyledTodoDescriptionSection,
  StyledTodoDescription, StyledTextButtons, StyledDescriptionButtons
} from "./styles";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TodoCard = () => {
  const { data: todos } = useQuery(["todos"], async () => {
    const { data } = await axios.get("http://localhost:8000/todos");
    const currentUserId = parseInt(localStorage.userId);
    const filterTodos = data.filter((x) => x.userId === currentUserId);

    return filterTodos;
  });

  const getIcon = (status) => {
    if (status === "In progress") {
      return ICONS.clock;
    } else if (status === "Done") {
      return ICONS.done;
    }
  };

  const [expandedTodoId, setExpandedTodoId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedTodoId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {todos?.map((todo) => (
        <StyledTodoCard key={todo.id}>
          <StyledTodoTitleSection>
            <StyledTodoIcon>{getIcon(todo.status)}</StyledTodoIcon>
            <StyledTodoTitle onClick={() => toggleAccordion(todo.id)}>
              {todo.title}
            </StyledTodoTitle>
          </StyledTodoTitleSection>
          <StyledTodoDescriptionSection>
            {expandedTodoId === todo.id && (
              <StyledTodoDescription>
                <StyledTextButtons>
                  <li>{todo.description}</li>
                  <StyledDescriptionButtons>
                    <button>Update</button>
                    <button>Delete</button>
                    <button>Complete</button>
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