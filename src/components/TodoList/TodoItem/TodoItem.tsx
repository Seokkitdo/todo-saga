import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITodo } from 'types';
import { removeTodo } from 'store/actions';

interface ITodoProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <TodoItemWrap>
      <TodoText>{todo.text}</TodoText>
      <TodoButtons>
        <TodoButton>
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

const complete = styled.div`
  text-decoration-style: solid;
  text-decoration-line: line-through;
  text-decoration-color: #ff6c6c;
  opacity: 0.6;
`;
const TodoItemWrap = styled.article`
  display: flex;
  justify-content: space-between;
  width: 31.6rem;
  border: 1px solid #ccc;
  padding: 0.8rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const TodoText = styled.p`
  color: white;
  width: 22rem;
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
