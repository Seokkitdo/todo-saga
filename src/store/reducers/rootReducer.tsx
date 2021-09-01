import { combineReducers } from 'redux';
import todos from 'store/reducers/todos';

export const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
