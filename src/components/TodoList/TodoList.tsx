import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import styled from 'styled-components';

import TodoItem from 'components/TodoList/TodoItem/TodoItem';
const TodoList: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.todos);

  console.log(data.map((d) => console.log(d)));

  return <ListWrap>{data.length > 0 ? data.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <p>리스트가 비어있습니다. </p>}</ListWrap>;
};

const ListWrap = styled.div`
  min-height: 25rem;
  p {
    color: #eee;
  }
`;

export default TodoList;
