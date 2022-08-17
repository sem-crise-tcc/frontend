import {
  OPEN_MODAL_PASSWORD_RESET_SUCCESS,
  CLOSE_MODAL_PASSWORD_RESET,
  CALL_PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  openModalPasswordReset,
  closeModalPasswordReset,
  callPasswordReset,
  passwordResetSuccess,
  passwordResetFailed
} from './PasswordReset';

describe('Password reset', () => {
  describe('Action Creators', () => {
    it('should call the action to open the modal', () => {
      expect(openModalPasswordReset()).toStrictEqual({
        type: OPEN_MODAL_PASSWORD_RESET_SUCCESS
      });
    });

    it('should call the action to close the modal', () => {
      expect(closeModalPasswordReset()).toStrictEqual({
        type: CLOSE_MODAL_PASSWORD_RESET
      });
    });

    it('should call the action to reset password', () => {
      expect(callPasswordReset()).toStrictEqual({
        type: CALL_PASSWORD_RESET
      });
    });

    it('should call the reset password success action', () => {
      expect(passwordResetSuccess()).toStrictEqual({
        type: PASSWORD_RESET_SUCCESS
      });
    });

    it('should call the password reset failure action', () => {
      expect(passwordResetFailed()).toStrictEqual({
        type: PASSWORD_RESET_FAILED
      });
    });
  });
});
