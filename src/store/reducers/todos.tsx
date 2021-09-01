/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ITodoListActionTypes, ITodosState, TodoActionTypes } from 'types';

const initialState: ITodosState = {
  data: [],
};

const todoReducer = (state = initialState, action: ITodoListActionTypes): ITodosState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload.text,
            isChecked: false,
          },
        ],
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        data: state.data.filter((todo) => todo.id !== action.payload.id),
      };

    case TodoActionTypes.TOGGLE_TODO:
      return {
        data: state.data.map((todo) => (todo.id === action.payload.id ? { ...todo, isChecked: !todo.isChecked } : todo)),
      };

    default:
      return state;
  }
};

export default todoReducer;
