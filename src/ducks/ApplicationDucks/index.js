import {
  OPEN_RECOVER_PASSWORD,
  CLOSE_RECOVER_PASSWORD,
  onOpenRecoverPassword,
  onCloseRecoverPassword
} from './RecoverPassword';

import {
  CALL_REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  onCallRegisterUser,
  onRegisterUserSuccess,
  onRegisterUserFailed
} from './RegisterUser';

import {
  CALL_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  onCallLogin,
  onLoginSuccess,
  onLoginFailed
} from './Login';

import {
  CALL_EDIT_PROFILE,
  EDIT_PROFILE_SUCESS,
  EDIT_PROFILE_FAILED,
  onCallEditProfile,
  onEditProfileSuccess,
  onEditProfileFailed
} from './EditProfile';

import {
  ACTIVE_DARK_MODE,
  onActive
} from './Theme';

const ACTION_HANDLERS = {
  [ACTIVE_DARK_MODE]: onActive,
  [CALL_REGISTER_USER]: onCallRegisterUser,
  [REGISTER_USER_SUCCESS]: onRegisterUserSuccess,
  [REGISTER_USER_FAILED]: onRegisterUserFailed,
  [CALL_LOGIN]: onCallLogin,
  [LOGIN_SUCCESS]: onLoginSuccess,
  [LOGIN_FAILED]: onLoginFailed,
  [OPEN_RECOVER_PASSWORD]: onOpenRecoverPassword,
  [CLOSE_RECOVER_PASSWORD]: onCloseRecoverPassword,
  [CALL_EDIT_PROFILE]: onCallEditProfile,
  [EDIT_PROFILE_SUCESS]: onEditProfileSuccess,
  [EDIT_PROFILE_FAILED]: onEditProfileFailed
};

export const INITIAL_STATE = {
  theme: {
    darkMode: false
  },
  loading: {
    register: false,
    login: false,
    recoverPassword: false,
    editProfile: false
  },
  page: {
    recoverPassword: {
      isVisible: false
    }
  },
  error: {
    register: null,
    login: null,
    recoverPassword: null,
    editProfile: null
  }
};

export default [INITIAL_STATE, ACTION_HANDLERS];
