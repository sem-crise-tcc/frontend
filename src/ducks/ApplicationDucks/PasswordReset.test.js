import {
  OPEN_PASSWORD_RESET_SUCCESS,
  CLOSE_PASSWORD_RESET,
  CALL_PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  openPasswordReset,
  closePasswordReset,
  callPasswordReset,
  passwordResetSuccess,
  passwordResetFailed
} from './PasswordReset';

describe('Password reset', () => {
  describe('Action Creators', () => {
    it('should call the action to open the modal', () => {
      expect(openPasswordReset()).toStrictEqual({
        type: OPEN_PASSWORD_RESET_SUCCESS
      });
    });

    it('should call the action to close the modal', () => {
      expect(closePasswordReset()).toStrictEqual({
        type: CLOSE_PASSWORD_RESET
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
