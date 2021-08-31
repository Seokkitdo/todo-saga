/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'api/index';
import { ITodoListActionTypes, TodoActionTypes } from 'types';
import { loadSuccess, loadFailure } from 'store/actions';

export function* load() {
  try {
    const { data } = yield call(api.get, 'http://localhost:3000/items');
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* deleteRequest({ payload }: ITodoListActionTypes) {
  try {
    yield call(api.delete, `http://localhost:3000/items/${payload.id}`);
  } catch (error) {
    console.log('DELETE ERROR');
  }
}

export function* todoSaga() {
  yield takeLatest(TodoActionTypes.LOAD_REQUEST, load);
  yield takeLatest(TodoActionTypes.REMOVE_TODO, deleteRequest);
}

// export function* addTodoSaga() {
//   yield delay(1000);
//   yield put(addTodo());
// }

// export function* removeTodoSaga() {
//   yield delay(1000);
//   yield put(removeTodo());
// }

// export function* todoSaga() {
//   yield takeEvery(TodoActionTypes.ADD_TODO_ASYNC, addTodoSaga);
//   yield takeLatest(TodoActionTypes.REMOVE_TODO_ASYNC, removeTodoSaga);
// }
