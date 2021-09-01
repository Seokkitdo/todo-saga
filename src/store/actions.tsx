/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ITodo, TodoActionTypes } from 'types';

export const addTodo = (text: string) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {
    text,
  },
});

export const removeTodo = (id: number) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id: number) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: {
    id,
  },
});
// export const addTodoAsync = () => ({
//   type: TodoActionTypes.ADD_TODO_ASYNC,
// });

// export const removeTodoAsync = () => ({
//   type: TodoActionTypes.REMOVE_TODO_ASYNC,
// });

export const loadRequest = () => ({
  type: TodoActionTypes.LOAD_REQUEST,
});

export const loadSuccess = (data: ITodo[]) => ({
  type: TodoActionTypes.LOAD_SUCCESS,
  data,
});

export const loadFailure = () => ({
  type: TodoActionTypes.LOAD_FAILURE,
});
