import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/actions';

const TodoHeader: React.FC = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
    // if (e.keyCode === 13) {
    //   handleSubmit(e);
    // }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput.length === 0 && todoInput.trim().length === 0) {
      alert('할 일을 입력해주세요');
      return;
    }
    dispatch(addTodo(todoInput));
    resetInput();
  };

  const resetInput = () => {
    setTodoInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HeaderWrapper>
        <HeaderTitle>Todo-List</HeaderTitle>
        <TodoCreator>
          <InputWrap>
            <TodoCreateInput placeholder='할 일을 입력해주세요' value={todoInput} onChange={(e) => handleChange(e)} />
          </InputWrap>
          <TodoCreateBtn type='submit'>Add</TodoCreateBtn>
        </TodoCreator>
      </HeaderWrapper>
    </form>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 1.5rem;
`;

const HeaderTitle = styled.div`
  padding: 2rem 1rem 1.5rem;
  font-size: 2rem;
  color: white;
`;

const TodoCreator = styled.div`
  display: flex;
`;

const InputWrap = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 5px;
  color: #eee;
`;

const TodoCreateInput = styled.input`
  margin: 0.7rem 0 0 0.4rem;
  font-size: 1rem;
  width: 26rem;
  padding: 0 0.2rem;
  border: none;
  color: #eee;
  background-color: #000000;
  outline: none;
`;

const TodoCreateBtn = styled.button`
  margin-left: 1.3rem;
  color: #eee;
  border-radius: 5px;
  background-color: #e1b382;
  padding: 0.7rem 1.1rem;
  cursor: pointer;
  border: none;
`;

export default TodoHeader;
