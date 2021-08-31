import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from 'components/TodoList/TodoItem/TodoItem';
const TodoList: React.FC = () => {
  const todos = useSelector((state) => state);

  console.log(todos);

  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
