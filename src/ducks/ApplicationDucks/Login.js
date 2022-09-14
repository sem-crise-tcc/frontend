export const CALL_LOGIN = '@user/CALL_LOGIN';
export const LOGIN_SUCCESS = '@user/LOGIN_SUCCESS';
export const LOGIN_FAILED = '@user/LOGIN_FAILED';

export const callLogin = ({ searchBody }) => ({
  type: CALL_LOGIN,
  searchBody
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailed = ({ error }) => ({
  type: LOGIN_FAILED,
  error
});

export const onCallLogin = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    login: true
  }
});

export const onLoginSuccess = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    login: false
  }
});

export const onLoginFailed = (state, { error }) => ({
  ...state,
  loading: {
    ...state.loading,
    login: false
  },
  error: {
    ...state.error,
    login: error
  }
});
