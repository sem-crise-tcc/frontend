import {
  all, fork, call, put, takeEvery
} from 'redux-saga/effects';
import { message } from 'antd';

import {
  CALL_REGISTER_USER,
  registerUserSuccess,
  registerUserFailed
} from '../ducks/ApplicationDucks/RegisterUser';
import {
  CALL_LOGIN,
  loginSuccess,
  loginFailed
} from '../ducks/ApplicationDucks/Login';
import {
  CALL_RECOVER_PASSWORD,
  recoverPasswordSuccess,
  recoverPasswordFailed
} from '../ducks/ApplicationDucks/RecoverPassword';
import {
  CALL_EDIT_PROFILE,
  editProfileSuccess,
  editProfileFailed
} from '../ducks/ApplicationDucks/EditProfile';

import ApplicationAPI from '../integrations/ApplicationAPI';

function* registerUser({ searchBody }) {
  try {
    yield call(ApplicationAPI.register, searchBody);

    yield put(registerUserSuccess());
    window.location.href = './login';
  } catch (error) {
    yield put(registerUserFailed({ error }));
    message.error('Erro ao criar usuário.');
  }
}

function* registerUserSaga() {
  yield takeEvery(CALL_REGISTER_USER, registerUser);
}

function* login({ searchBody }) {
  try {
    yield call(ApplicationAPI.login, searchBody);

    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailed({ error }));
  }
}

function* loginSaga() {
  yield takeEvery(CALL_LOGIN, login);
}

function* recoverPassword({ email }) {
  try {
    yield call(ApplicationAPI.recoverPassword, email);

    yield put(recoverPasswordSuccess());
  } catch (error) {
    yield put(recoverPasswordFailed({ error }));
  }
}

function* recoverPasswordSaga() {
  yield takeEvery(CALL_RECOVER_PASSWORD, recoverPassword);
}

function* editProfile({ searchBody }) {
  try {
    yield call(ApplicationAPI.editProfile, searchBody);

    yield put(editProfileSuccess());
  } catch (error) {
    yield put(editProfileFailed({ error }));
  }
}

function* editProfileSaga() {
  yield takeEvery(CALL_EDIT_PROFILE, editProfile);
}

export default function* () {
  yield all([
    fork(registerUserSaga),
    fork(loginSaga),
    fork(recoverPasswordSaga),
    fork(editProfileSaga)
  ]);
}
