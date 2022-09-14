import { INITIAL_STATE } from './index';
import {
  CALL_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  callLogin,
  loginSuccess,
  loginFailed,
  onCallLogin,
  onLoginSuccess,
  onLoginFailed
} from './Login';

describe('Password reset', () => {
  describe('Action Creators', () => {
    test('should call the action to login', () => {
      const searchBody = {
        email: 'dadas@email.com',
        password: '123'
      };

      expect(callLogin({ searchBody })).toStrictEqual({
        type: CALL_LOGIN,
        searchBody
      });
    });

    test('should return success when calling login action', () => {
      expect(loginSuccess()).toStrictEqual({
        type: LOGIN_SUCCESS
      });
    });

    test('should return an error when calling the login action', () => {
      const error = 'Error';

      expect(loginFailed({ error })).toStrictEqual({
        type: LOGIN_FAILED,
        error
      });
    });
  });

  describe('Action Handlers', () => {
    test('should change state when calling login action', () => {
      expect(onCallLogin(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          login: true
        }
      });
    });

    test('should return success on login', () => {
      expect(onLoginSuccess(INITIAL_STATE)).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          login: false
        }
      });
    });

    test('should return error when trying to login', () => {
      const error = 'Error';

      expect(onLoginFailed(INITIAL_STATE, { error })).toStrictEqual({
        ...INITIAL_STATE,
        loading: {
          ...INITIAL_STATE.loading,
          login: false
        },
        error: {
          ...INITIAL_STATE.error,
          login: error
        }
      });
    });
  });
});
