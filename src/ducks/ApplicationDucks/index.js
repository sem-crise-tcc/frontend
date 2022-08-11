import {
  CALL_REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  onCallRegisterUser,
  onRegisterUserSuccess,
  onRegisterUserFailed
} from './RegisterUser';

const ACTION_HANDLERS = {
  [CALL_REGISTER_USER]: onCallRegisterUser,
  [REGISTER_USER_SUCCESS]: onRegisterUserSuccess,
  [REGISTER_USER_FAILED]: onRegisterUserFailed
};

const INITIAL_STATE = {
  loading: {
    register: false
  }
};

export default [INITIAL_STATE, ACTION_HANDLERS];
