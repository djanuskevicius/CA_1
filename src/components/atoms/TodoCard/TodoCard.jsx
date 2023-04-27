import React from 'react'
import ICONS from '../../../shared/icons'
import { StyledTodoCard, StyledTodoIcon, StyledTodoHeader, StyledTodoDescription } from './styles'

const TodoCard = () => {
  return (
    <StyledTodoCard>
      <StyledTodoIcon>
        {ICONS.clock}
      </StyledTodoIcon>
      <div>
        <StyledTodoHeader>Task 1</StyledTodoHeader>
        <StyledTodoDescription>Task description</StyledTodoDescription>
      </div>

    </StyledTodoCard>
  )
}

export default TodoCard