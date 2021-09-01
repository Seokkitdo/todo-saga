/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';
import { todoSaga } from 'store/sagas/sagas';

export default function* rootSaga() {
  yield all([todoSaga]);
}
