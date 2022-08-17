export const OPEN_MODAL_PASSWORD_RESET_SUCCESS = '@application/OPEN_MODAL_PASSWORD_RESET_SUCCESS';
export const CLOSE_MODAL_PASSWORD_RESET = '@application/CLOSE_MODAL_PASSWORD_RESET';
export const CALL_MODAL_PASSWORD_RESET = '@application/CALL_MODAL_PASSWORD_RESET';
export const MODAL_PASSWORD_RESET_SUCCESS = '@application/MODAL_PASSWORD_RESET_SUCCESS';
export const MODAL_PASSWORD_RESET_FAILED = '@application/MODAL_PASSWORD_RESET_FAILED';

export const openModalPasswordReset = () => ({
  type: OPEN_MODAL_PASSWORD_RESET_SUCCESS
});

export const closeModalPasswordReset = () => ({
  type: CLOSE_MODAL_PASSWORD_RESET
});

export const callModalPasswordReset = () => ({
  type: CALL_MODAL_PASSWORD_RESET
});

export const modalPasswordResetSuccess = () => ({
  type: MODAL_PASSWORD_RESET_SUCCESS
});

export const modalPasswordResetFailed = () => ({
  type: MODAL_PASSWORD_RESET_FAILED
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

export const onCallModalPasswordReset = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});

export const onModalPasswordResetSuccess = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});

export const onModalPasswordResetFailed = (state) => ({
  ...state,
  modals:
    state.modal,
  passwordReset: true
});
