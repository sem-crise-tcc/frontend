export const CALL_REGISTER_USER = '@user/CALL_REGISTER_USER';
export const REGISTER_USER_SUCCESS = '@user/REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = '@user/REGISTER_USER_FAILED';

export const callRegisterUser = ({ searchBody }) => ({
  type: CALL_REGISTER_USER,
  searchBody
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS
});

export const registerUserFailed = () => ({
  type: REGISTER_USER_FAILED
});

export const onCallRegisterUser = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    register: true
  }
});

export const onRegisterUserSuccess = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    register: false
  }
});

export const onRegisterUserFailed = (state, { error }) => ({
  ...state,
  loading: {
    ...state.loading,
    register: false
  },
  error: {
    ...state.error,
    register: error
  }
});
