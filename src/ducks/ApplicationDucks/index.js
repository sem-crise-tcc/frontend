import {
  OPEN_PASSWORD_RESET_SUCCESS,
  CLOSE_PASSWORD_RESET,
  onOpenPasswordReset,
  onClosePasswordReset
} from './PasswordReset';

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
  [REGISTER_USER_FAILED]: onRegisterUserFailed,
  [OPEN_PASSWORD_RESET_SUCCESS]: onOpenPasswordReset,
  [CLOSE_PASSWORD_RESET]: onClosePasswordReset
};

const INITIAL_STATE = {
  loading: {
    register: false
  },
  page: {
    passwordReset: {
      isVisible: false
    }
  }
};

export default [INITIAL_STATE, ACTION_HANDLERS];
