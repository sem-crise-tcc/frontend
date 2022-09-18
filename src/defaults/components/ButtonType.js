import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronLeft } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiPlusSm } from 'react-icons/hi';

import {
  PRIMARY_COLOR,
  LIGHT_RED_COLOR,
  WHITE_COLOR,
  MEDIUM_GREEN_COLOR,
  MEDIUM_RED_COLOR
} from '../Colors';

export const BTN_SIGN_IN = {
  text: 'Login',
  type: 'default',
  style: {
    borderRadius: '30px',
    border: `1px solid ${PRIMARY_COLOR}`
  }
};

export const BTN_SIGN_UP = {
  text: 'Cadastrar',
  type: 'default',
  style: {
    borderRadius: '30px'
  }
};

export const BTN_LINK_FORGOT_PASSWORD = {
  text: 'Esqueceu sua senha?',
  block: 'block',
  type: 'default'
};

export const BTN_FORGOT_PASSWORD = {
  text: 'Recuperar senha',
  block: 'block',
  type: 'primary',
  htmlType: 'submit',
  style: {
    backgroundColor: LIGHT_RED_COLOR,
    borderColor: LIGHT_RED_COLOR
  }
};

export const BTN_REGISTER_LINK = {
  text: 'Inscreva-se',
  type: 'link',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_FORGOT_PASSWORD_CANCEL = {
  text: 'Voltar',
  block: 'block',
  type: 'default'
};

export const BTN_REGISTER_GOOGLE = {
  text: 'Crie sua conta com o Google',
  block: 'block',
  type: 'default',
  icon: <FcGoogle />,
  style: {
    alignItems: 'center',
    display: 'flex',
    borderRadius: '30px',
    justifyContent: 'space-evenly',
    marginTop: '24px'
  }
};

export const BTN_CREATE_ACCOUNT = {
  text: 'Criar conta',
  block: 'block',
  type: 'primary',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: LIGHT_RED_COLOR,
    borderColor: LIGHT_RED_COLOR
  }
};

export const BTN_LOGIN_LINK = {
  text: 'Faça login',
  type: 'link',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_LOGIN_GOOGLE = {
  text: 'Faça login com Google',
  block: 'block',
  type: 'default',
  icon: <FcGoogle />,
  style: {
    alignItems: 'center',
    display: 'flex',
    borderRadius: '30px',
    justifyContent: 'space-evenly',
    marginTop: '24px'
  }
};

export const BTN_LOGIN = {
  text: 'Login',
  block: 'block',
  type: 'primary',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: LIGHT_RED_COLOR,
    borderColor: LIGHT_RED_COLOR
  }
};

export const BTN_CHANGE_USER_IMAGE = {
  text: 'Alterar imagem',
  type: 'default',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_FORM_SAVE = {
  text: 'Salvar',
  type: 'primary',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_FORM_CANCEL = {
  text: 'Cancelar',
  type: 'default',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_CHANGE_PASSWORD = {
  text: 'Alterar senha',
  block: 'block',
  type: 'default',
  htmlType: 'submit'
};

export const BTN_SETTINGS = {
  icon: <IoSettingsOutline />,
  shape: 'circle',
  htmlType: 'submit',
  className: 'btn-settings',
  size: 'large',
  style: {
    backgroundColor: WHITE_COLOR,
    borderColor: WHITE_COLOR,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const BTN_BACK_PAGE = {
  icon: <FiChevronLeft />,
  shape: 'circle',
  size: 'large',
  className: 'btn-back-page',
  style: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: WHITE_COLOR
  }
};

export const BTN_SETTINGS_OPTION_OPEN = {
  icon: <MdKeyboardArrowRight />,
  className: 'btn-settings-option-open',
  style: {
    color: PRIMARY_COLOR,
    marginLeft: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '5px'
  }
};

export const BTN_CUSTOMIZE_CATEGORY = {
  icon: <MdKeyboardArrowRight />,
  style: {
    color: PRIMARY_COLOR,
    marginLeft: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '30px',
    boxShadow: '1px 4px 9px #9b9b9b'
  }
};

export const BTN_ADD_CATEGORY_EXPENSE = {
  icon: <HiPlusSm />,
  text: 'Criar categoria de despesa',
  block: 'block',
  type: 'default',
  style: {
    color: WHITE_COLOR,
    backgroundColor: MEDIUM_RED_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '3px'
  }
};

export const BTN_ADD_CATEGORY_EARNING = {
  icon: <HiPlusSm />,
  text: 'Criar categoria de despesa',
  block: 'block',
  type: 'default',
  style: {
    color: WHITE_COLOR,
    backgroundColor: MEDIUM_GREEN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '3px'
  }
};

export default {
  BTN_SIGN_IN,
  BTN_SIGN_UP,
  BTN_FORGOT_PASSWORD,
  BTN_LINK_FORGOT_PASSWORD,
  BTN_FORGOT_PASSWORD_CANCEL,
  BTN_REGISTER_GOOGLE,
  BTN_CREATE_ACCOUNT,
  BTN_LOGIN_LINK,
  BTN_LOGIN_GOOGLE,
  BTN_LOGIN,
  BTN_CHANGE_USER_IMAGE,
  BTN_FORM_SAVE,
  BTN_FORM_CANCEL,
  BTN_CHANGE_PASSWORD,
  BTN_SETTINGS,
  BTN_BACK_PAGE,
  BTN_SETTINGS_OPTION_OPEN,
  BTN_CUSTOMIZE_CATEGORY,
  BTN_ADD_CATEGORY_EXPENSE,
  BTN_ADD_CATEGORY_EARNING
};
