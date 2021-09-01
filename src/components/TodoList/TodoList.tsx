import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import styled from 'styled-components';

import TodoItem from 'components/TodoList/TodoItem/TodoItem';
const TodoList: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.todos);

  return (
    <ListWrap>
      {data.length > 0 && <CountList>남은 일이 {data.map((todo) => todo.isChecked).filter((check) => check === false).length}개 남았어요!</CountList>}
      {data.length > 0 ? data.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <p>리스트가 비어있습니다. </p>}
    </ListWrap>
  );
};

const ListWrap = styled.div`
  min-height: 25rem;
  p {
    color: #eee;
  }
`;

const CountList = styled.p`
  color: #eee;
  text-align: center;
  margin-bottom: 1rem;
`;
export default TodoList;
