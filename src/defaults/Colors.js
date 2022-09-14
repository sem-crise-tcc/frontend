export const PRIMARY_COLOR = '#2965D5';
export const LIGHT_RED_COLOR = '#F47467';
export const WHITE_COLOR = '#FFFFFF';
export const WHITE_LIGHT_COLOR = '#F5F5F6';
export const BLUE_LIGHT = '#BCD2E8';
export const YELLOW_COLOR = '#F2A73A';
export const BACK_COLOR = '#000000';

export const DARK_MODE_BACKGROUND_BUTTON = '#202020';
export const DARK_MODE_GRAY_SHADOW_COLOR = '#565656';
export const DARK_MODE_MEDIUM_BLACK = '#2C2C2C';

export const LIGHT_MODE_BACKGROUND_BODY = '#F8F8F8';
export const LIGHT_MODE_GRAY_SHADOW_COLOR = '#9b9b9b';
export const LIGHT_MODE_BORDER = '#d9d9d9';

export const darkTheme = {
  backgroundBody: BACK_COLOR,
  title: WHITE_COLOR,
  text: WHITE_COLOR,
  backgroundButton: DARK_MODE_BACKGROUND_BUTTON,
  borderColorButton: DARK_MODE_BACKGROUND_BUTTON,
  settingOption: DARK_MODE_BACKGROUND_BUTTON,
  settingOptionShadow: DARK_MODE_GRAY_SHADOW_COLOR,
  settingOptionShadowBtn: 'none',
  backgroundBodyMedium: DARK_MODE_MEDIUM_BLACK
};

export const lightTheme = {
  backgroundBody: LIGHT_MODE_BACKGROUND_BODY,
  title: BACK_COLOR,
  text: BACK_COLOR,
  backgroundButton: WHITE_COLOR,
  borderColorButton: LIGHT_MODE_BORDER,
  settingOption: LIGHT_MODE_BACKGROUND_BODY,
  settingOptionShadow: LIGHT_MODE_GRAY_SHADOW_COLOR,
  settingOptionShadowBtn: `0px 2px 10px ${LIGHT_MODE_GRAY_SHADOW_COLOR}`,
  backgroundBodyMedium: LIGHT_MODE_BACKGROUND_BODY
};

export default {
  lightTheme,
  darkTheme,
  PRIMARY_COLOR,
  LIGHT_RED_COLOR,
  WHITE_COLOR,
  WHITE_LIGHT_COLOR,
  BLUE_LIGHT,
  YELLOW_COLOR,
  LIGHT_MODE_BACKGROUND_BODY
};
