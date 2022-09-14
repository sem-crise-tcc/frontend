export const ACTIVE_DARK_MODE = '@application/ACTIVE_DARK_MODE';

export const activeDarkMode = (isActive) => ({
  type: ACTIVE_DARK_MODE,
  isActive
});

export const onActive = (state, { isActive }) => ({
  ...state,
  theme: {
    ...state.theme,
    darkMode: isActive
  }
});
