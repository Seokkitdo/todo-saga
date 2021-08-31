import { ITodoListActionTypes, ITodosState, TodoActionTypes } from 'types';

const initialState: ITodosState = {
  data: [],
};

const todoReducer = (state = initialState, action: ITodoListActionTypes) => {
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

    default:
      return state;
  }
};

export default todoReducer;
