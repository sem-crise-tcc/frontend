import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { PRIMARY_COLOR } from '../Colors';

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
  type: 'primary'
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
    justifyContent: 'center',
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
    justifyContent: 'center'
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
    justifyContent: 'center',
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
    justifyContent: 'center'
  }
};

export const CHANGE_USER_IMAGE = {
  text: 'Alterar imagem',
  type: 'default',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const FORM_SAVE = {
  text: 'Salvar',
  type: 'primary',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export const FORM_CANCEL = {
  text: 'Cancelar',
  type: 'default',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
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
  CHANGE_USER_IMAGE,
  FORM_SAVE,
  FORM_CANCEL
};