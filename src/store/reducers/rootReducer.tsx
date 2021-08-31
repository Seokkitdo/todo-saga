import { combineReducers } from 'redux';
import todos from 'store/reducers/todos';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
