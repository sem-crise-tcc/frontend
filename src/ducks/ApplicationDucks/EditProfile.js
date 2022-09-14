export const CALL_EDIT_PROFILE = '@user/CALL_EDIT_PROFILE';
export const EDIT_PROFILE_SUCESS = '@user/EDIT_PROFILE_SUCESS';
export const EDIT_PROFILE_FAILED = '@user/EDIT_PROFILE_FAILED';

export const callEditProfile = ({ searchBody }) => ({
  type: CALL_EDIT_PROFILE,
  searchBody
});

export const editProfileSuccess = () => ({
  type: EDIT_PROFILE_SUCESS
});

export const editProfileFailed = ({ error }) => ({
  type: EDIT_PROFILE_FAILED,
  error
});

export const onCallEditProfile = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    editProfile: true
  }
});

export const onEditProfileSuccess = (state) => ({
  ...state,
  loading: {
    ...state.loading,
    editProfile: false
  }
});

export const onEditProfileFailed = (state, { error }) => ({
  ...state,
  loading: {
    ...state.loading,
    editProfile: false
  },
  error: {
    ...state.error,
    editProfile: error
  }
});
