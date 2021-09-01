export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  ADD_TODO_ASYNC = 'ADD_TODO_ASYNC',
  REMOVE_TODO_ASYNC = 'REMOTE_TODO_ASYNC',
  LOAD_REQUEST = 'LOAD_REQUEST',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAILURE = 'LOAD_FAILURE',
}

export interface ITodo {
  id: number;
  text: string;
  isChecked: boolean;
}

export interface ITodoListActionTypes {
  type: string;
  payload: ITodo;
  data: ITodo[];
}

export interface ITodosState {
  data: ITodo[];
}
