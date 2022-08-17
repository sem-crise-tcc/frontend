import {
  OPEN_MODAL_PASSWORD_RESET_SUCCESS,
  CLOSE_MODAL_PASSWORD_RESET,
  onOpenModalPasswordReset,
  onCloseModalPasswordReset
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
  [OPEN_MODAL_PASSWORD_RESET_SUCCESS]: onOpenModalPasswordReset,
  [CLOSE_MODAL_PASSWORD_RESET]: onCloseModalPasswordReset
};

const INITIAL_STATE = {
  loading: {
    register: false
  },
  modals: {
    passwordReset: {
      isVisible: false
    }
  }
};

export default [INITIAL_STATE, ACTION_HANDLERS];
