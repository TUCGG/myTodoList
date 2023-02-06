import styled from "styled-components";
import "./TodoTemplate.scss";

const StyledAppTitle = styled.h2``;

const StyledTodoTemplate = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <StyledTodoTemplate>
        <StyledAppTitle>일정관리</StyledAppTitle>
        <div className="content">{children}</div>
      </StyledTodoTemplate>
    </div>
  );
};

export default TodoTemplate;
