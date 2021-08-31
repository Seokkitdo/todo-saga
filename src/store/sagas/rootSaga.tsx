import { all, takeLatest } from 'redux-saga/effects';
import { TodoActionTypes } from 'types';
import { deleteRequest, load, todoSaga } from 'store/sagas/sagas';

export default function* rootSaga() {
  yield all([todoSaga]);
}
