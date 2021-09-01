import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITodo } from 'types';
import { removeTodo, toggleTodo } from 'store/actions';

interface ITodoProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeTodo(todo.id));
  };

  const toggleHandler = () => {
    dispatch(toggleTodo(todo.id));
  };
  return (
    <TodoItemWrap isChecked={todo.isChecked}>
      <TodoText isChecked={todo.isChecked}>{todo.text}</TodoText>
      <TodoButtons>
        <TodoButton onClick={toggleHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </TodoButton>
        <TodoButton>
          <FontAwesomeIcon icon={faEdit} />
        </TodoButton>
        <TodoButton onClick={removeHandler}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </TodoButton>
      </TodoButtons>
    </TodoItemWrap>
  );
};

interface ICheck {
  isChecked: boolean;
}

const TodoItemWrap = styled.article<ICheck>`
  display: flex;
  justify-content: space-between;
  width: 31.6rem;
  border: 1px solid #ccc;
  padding: 0.8rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  opacity: ${(props) => (props.isChecked ? '0.6' : '1')};
`;

const TodoText = styled.p<ICheck>`
  color: white;
  width: 22rem;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;

const TodoButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoButton = styled.button`
  border: none;
  margin: 0 0.5rem;
  background-color: #12343b;
  cursor: pointer;
  &:nth-child(1) {
    color: #ff6c6c;
  }
  &:nth-child(2) {
    color: #e2d029;
  }
  &:nth-child(3) {
    color: #20b2aa;
  }
`;
export default TodoItem;
