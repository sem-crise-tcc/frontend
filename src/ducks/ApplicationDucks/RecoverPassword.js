export const OPEN_RECOVER_PASSWORD = '@application/OPEN_RECOVER_PASSWORD';
export const CLOSE_RECOVER_PASSWORD = '@application/CLOSE_RECOVER_PASSWORD';
export const CALL_RECOVER_PASSWORD = '@user/CALL_RECOVER_PASSWORD';
export const RECOVER_PASSWORD_SUCCESS = '@user/RECOVER_PASSWORD_SUCCESS';
export const RECOVER_PASSWORD_FAILED = '@user/RECOVER_PASSWORD_FAILED';

export const openRecoverPassword = () => ({
  type: OPEN_RECOVER_PASSWORD
});

export const closeRecoverPassword = () => ({
  type: CLOSE_RECOVER_PASSWORD
});

export const callRecoverPassword = ({ email }) => ({
  type: CALL_RECOVER_PASSWORD,
  email
});

export const recoverPasswordSuccess = () => ({
  type: RECOVER_PASSWORD_SUCCESS
});

export const recoverPasswordFailed = ({ error }) => ({
  type: RECOVER_PASSWORD_FAILED,
  error
});

export const onOpenRecoverPassword = (state) => ({
  ...state,
  page: {
    ...state.page,
    recoverPassword: {
      ...state.page.recoverPassword,
      isVisible: true
    }
  }
});

export const onCloseRecoverPassword = (state) => ({
  ...state,
  page: {
    ...state.page,
    recoverPassword: {
      ...state.page.recoverPassword,
      isVisible: false
    }
  }
});

export const onCallRecoverPassword = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    recoverPassword: true
  }
});

export const onRecoverPasswordSuccess = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    recoverPassword: false
  },
  error: {
    ...state.error,
    recoverPassword: null
  }
});

export const onRecoverPasswordFailed = (state, { error }) => ({
  ...state,
  loading: {
    ...state.loading,
    recoverPassword: false
  },
  error: {
    ...state.error,
    recoverPassword: error
  }
});
