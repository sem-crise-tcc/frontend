export const OPEN_PASSWORD_RESET_SUCCESS = '@application/OPEN_PASSWORD_RESET_SUCCESS';
export const CLOSE_PASSWORD_RESET = '@application/CLOSE_PASSWORD_RESET';
export const CALL_PASSWORD_RESET = '@application/CALL_PASSWORD_RESET';
export const PASSWORD_RESET_SUCCESS = '@application/PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILED = '@application/PASSWORD_RESET_FAILED';

export const openPasswordReset = () => ({
  type: OPEN_PASSWORD_RESET_SUCCESS
});

export const closePasswordReset = () => ({
  type: CLOSE_PASSWORD_RESET
});

export const callPasswordReset = () => ({
  type: CALL_PASSWORD_RESET
});

export const passwordResetSuccess = () => ({
  type: PASSWORD_RESET_SUCCESS
});

export const passwordResetFailed = () => ({
  type: PASSWORD_RESET_FAILED
});

export const onOpenPasswordReset = (state) => ({
  ...state,
  page: {
    ...state.page,
    passwordReset: {
      ...state.page.passwordReset,
      isVisible: true
    }
  }
});

export const onClosePasswordReset = (state) => ({
  ...state,
  page: {
    ...state.page,
    passwordReset: {
      ...state.page.passwordReset,
      isVisible: false
    }
  }
});

export const onCallPasswordReset = (state) => ({
  ...state,
  page:
    state.modal,
  passwordReset: true
});

export const onPasswordResetSuccess = (state) => ({
  ...state,
  page:
    state.modal,
  passwordReset: true
});

export const onPasswordResetFailed = (state) => ({
  ...state,
  page:
    state.modal,
  passwordReset: true
});
