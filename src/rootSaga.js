import { all, fork } from 'redux-saga/effects';
import applicationSagas from './sagas/ApplicationSagas';

export default function* () {
  yield all([
    fork(applicationSagas)
  ]);
}
