import React from 'react';

import TodoItem from 'components/TodoList/TodoItem/TodoItem';
const TodoList: React.FC = () => {
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
