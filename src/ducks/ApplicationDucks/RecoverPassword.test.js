import { INITIAL_STATE } from './index';
import {
  OPEN_RECOVER_PASSWORD,
  CLOSE_RECOVER_PASSWORD,
  CALL_RECOVER_PASSWORD,
  RECOVER_PASSWORD_SUCCESS,
  RECOVER_PASSWORD_FAILED,
  openRecoverPassword,
  closeRecoverPassword,
  callRecoverPassword,
  recoverPasswordSuccess,
  recoverPasswordFailed,
  onOpenRecoverPassword,
  onCloseRecoverPassword,
  onCallRecoverPassword,
  onRecoverPasswordSuccess,
  onRecoverPasswordFailed
} from './RecoverPassword';

describe('Recover password', () => {
  describe('Action Creators', () => {
    it('should call the action to open the modal', () => {
      expect(openRecoverPassword()).toStrictEqual({
        type: OPEN_RECOVER_PASSWORD
      });
    });

    it('should call the action to close the modal', () => {
      expect(closeRecoverPassword()).toStrictEqual({
        type: CLOSE_RECOVER_PASSWORD
      });
    });

    it('should call the action to reset password', () => {
      expect(callRecoverPassword()).toStrictEqual({
        type: CALL_RECOVER_PASSWORD
      });
    });

    it('should call the reset password success action', () => {
      expect(recoverPasswordSuccess()).toStrictEqual({
        type: RECOVER_PASSWORD_SUCCESS
      });
    });

    it('should call the password reset failure action', () => {
      const error = 'Error';

      expect(recoverPasswordFailed({ error })).toStrictEqual({
        type: RECOVER_PASSWORD_FAILED,
        error
      });
    });
  });

  describe('Action Handlers', () => {
    it('should make the screen recovery page visible', () => {
      expect(onOpenRecoverPassword(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        page: {
          ...INITIAL_STATE.page,
          recoverPassword: {
            ...INITIAL_STATE.page.recoverPassword,
            isVisible: true
          }
        }
      });
    });

    it('should hide screen recovery page', () => {
      expect(onCloseRecoverPassword(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        page: {
          ...INITIAL_STATE.page,
          recoverPassword: {
            ...INITIAL_STATE.page.recoverPassword,
            isVisible: false
          }
        }
      });
    });

    it('should call password recovery action', () => {
      expect(onCallRecoverPassword(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          recoverPassword: true
        }
      });
    });

    it('should return success when recovering password', () => {
      expect(onRecoverPasswordSuccess(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          recoverPassword: false
        }
      });
    });

    it('should return an error when recovering password', () => {
      const error = 'Error';

      expect(onRecoverPasswordFailed(INITIAL_STATE, { error })).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          recoverPassword: false
        },
        error: {
          ...INITIAL_STATE.error,
          recoverPassword: error
        }
      });
    });
  });
});
