import { useCallback } from 'react';
import {
  Divider,
  Form,
  Input,
  notification
} from 'antd';
import { Link } from 'react-router-dom';

import { openModalPasswordReset } from '../../../ducks/ApplicationDucks/PasswordReset';

import { useDispatch } from '../../../utility/WorkspaceContext';

import {
  BTN_LOGIN_GOOGLE, BTN_LOGIN, BTN_LINK_FORGOT_PASSWORD, BTN_REGISTER_LINK
} from '../../../defaults/ButtonType';

import Button from '../../Button';

import {
  ContainerLogin
} from '../styles';

const { Item: FormItem } = Form;
const { Password: InputPassword } = Input;

function FormLogin() {
  const dispatch = useDispatch();

  const openModal = useCallback(
    () => dispatch(openModalPasswordReset()),
    [dispatch]
  );

  const onFinish = ({ email, password }) => {
    console.log('Success:', email, password);
  };

  const onFinishFailed = (error) => {
    if (!error) {
      notification.warning({
        message: 'Ops!',
        description:
          'E-mail e/ou senha inválidos. Por favor, tente novamente.'
      });
    }
  };

  return (
    <>
      <Button buttonConfig={BTN_LOGIN_GOOGLE} />
      <Divider>ou</Divider>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem
          name="email"
        >
          <Input placeholder="E-mail" />
        </FormItem>

        <FormItem
          name="password"
        >
          <InputPassword placeholder="Senha" />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_LOGIN} />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_LINK_FORGOT_PASSWORD} onClick={() => openModal()} />
        </FormItem>
      </Form>

      <ContainerLogin>
        <span>
          Não tem uma conta?
        </span>
        <Link to="/register">
          <Button buttonConfig={BTN_REGISTER_LINK} />
        </Link>
      </ContainerLogin>
    </>
  );
}

export default FormLogin;
