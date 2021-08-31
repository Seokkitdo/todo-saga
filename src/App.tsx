import React from 'react';
import styled from 'styled-components';

import TodoHeader from 'components/TodoHeader/TodoHeader';
import TodoList from 'components/TodoList/TodoList';

const App: React.FC = () => (
  <TodoWrap>
    <TodoHeader />
    <TodoList />
  </TodoWrap>
);

const TodoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  width: 35rem;
  border-radius: 8px;
  margin: 10rem auto 0;
  background-color: #12343b;
`;
export default App;
