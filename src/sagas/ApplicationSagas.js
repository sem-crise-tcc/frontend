import {
  all, fork, call, put, takeEvery
} from 'redux-saga/effects';
import {
  CALL_REGISTER_USER,
  registerUserSuccess,
  registerUserFailed
} from '../ducks/ApplicationDucks/RegisterUser';
import ApplicationAPI from '../integrations/ApplicationAPI';

function* registerUser({ searchBody }) {
  try {
    const user = yield call(ApplicationAPI.register, searchBody);

    yield put(registerUserSuccess());
  } catch (e) {
    yield put(registerUserFailed());
  }
}

function* registerUserSaga() {
  yield takeEvery(CALL_REGISTER_USER, registerUser);
}

export default function* () {
  yield all([fork(registerUserSaga)]);
}
