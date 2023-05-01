import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { ICONS } from "../constants/icons";
import ICONS from "../../../shared/icons";
import {
  StyledTodoCard,
  StyledTodoTitle,
  StyledTodoIcon,
  StyledTodoTitleSection,
  StyledTodoDescriptionSection,
  StyledTodoDescription,
  StyledTextButtons,
  StyledDescriptionButtons,
} from "./styles";
import Button from "../Button/index";

const TodoCard = () => {
  const { data: todos, refetch } = useQuery(["todos"], async () => {
    const { data } = await axios.get("http://localhost:8000/todos");
    const currentUserId = parseInt(localStorage.userId);
    const filterTodos = data.filter((x) => x.userId === currentUserId);

    return filterTodos;
  });

  const getIcon = (status) => {
    if (status === "In progress" || "Pradėta") {
      return ICONS.clock;
    } else if (status === "Done" || "Baigta") {
      return ICONS.done;
    } else if (status === "To Do" || "Ne pradėta") {
      return ICONS.start;
    }
  };

  const [expandedTodoId, setExpandedTodoId] = useState(null);

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
                    <button onClick={() => console.log("Update clicked")}>
                      {ICONS.edit}
                    </button>
                    <button onClick={() => handleDelete(todo.id)}>
                      {ICONS.delete}
                    </button>
                    <button onClick={() => console.log("Complete clicked")}>
                      {ICONS.check}
                    </button>
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
