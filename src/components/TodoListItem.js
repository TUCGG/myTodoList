import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import styled from "styled-components";

const StyledTodoListItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StyledCheckBox = styled.div`
  display: flex;
  min-width: 75%;
  align-items: center;
  &.checked {
    opacity: 0.5;
  }
  &.checked + .remove {
    opacity: 0.5;
  }
  & svg {
    margin-right: 10px;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <StyledTodoListItem>
      <StyledCheckBox
        className={cn("checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </StyledCheckBox>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </StyledTodoListItem>
  );
};

export default TodoListItem;
