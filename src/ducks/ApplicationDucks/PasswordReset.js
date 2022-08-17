export const OPEN_MODAL_PASSWORD_RESET_SUCCESS = '@application/OPEN_MODAL_PASSWORD_RESET_SUCCESS';
export const CLOSE_MODAL_PASSWORD_RESET = '@application/CLOSE_MODAL_PASSWORD_RESET';
export const CALL_PASSWORD_RESET = '@application/CALL_PASSWORD_RESET';
export const PASSWORD_RESET_SUCCESS = '@application/PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILED = '@application/PASSWORD_RESET_FAILED';

export const openModalPasswordReset = () => ({
  type: OPEN_MODAL_PASSWORD_RESET_SUCCESS
});

export const closeModalPasswordReset = () => ({
  type: CLOSE_MODAL_PASSWORD_RESET
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

export const onOpenModalPasswordReset = (state) => ({
  ...state,
  modals: {
    ...state.modals,
    passwordReset: {
      ...state.modals.passwordReset,
      isVisible: true
    }
  }
});

export const onCloseModalPasswordReset = (state) => ({
  ...state,
  modals: {
    ...state.modals,
    passwordReset: {
      ...state.modals.passwordReset,
      isVisible: false
    }
  }
});

export const onCallPasswordReset = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});

export const onPasswordResetSuccess = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});

export const onPasswordResetFailed = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});
