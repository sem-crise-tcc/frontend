import React from 'react';
import { FcGoogle } from 'react-icons/fc';

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
  type: 'default',
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
  type: 'default',
  htmlType: 'submit',
  style: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
};

export default {
  BTN_REGISTER_GOOGLE,
  BTN_CREATE_ACCOUNT,
  BTN_LOGIN_LINK,
  BTN_LOGIN_GOOGLE,
  BTN_LOGIN
};
