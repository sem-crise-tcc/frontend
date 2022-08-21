import { useCallback } from 'react';
import {
  Divider,
  Form,
  notification
} from 'antd';
import { Link } from 'react-router-dom';

import { openPasswordReset } from '../../../ducks/ApplicationDucks/PasswordReset';

import { useDispatch } from '../../../utility/WorkspaceContext';

import {
  BTN_LOGIN_GOOGLE,
  BTN_LOGIN,
  BTN_LINK_FORGOT_PASSWORD,
  BTN_REGISTER_LINK
} from '../../../defaults/components/ButtonType';
import {
  INPUT_EMAIL,
  INPUT_PASSWORD
} from '../../../defaults/components/InputType';

import Input from '../../Input';
import Button from '../../Button';

import {
  ContainerLogin
} from '../styles';

const { Item: FormItem } = Form;

function FormLogin() {
  const dispatch = useDispatch();

  const callPasswordReset = useCallback(
    () => dispatch(openPasswordReset()),
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
        <Input inputConfig={INPUT_EMAIL} />
        <Input inputConfig={INPUT_PASSWORD} />

        <FormItem>
          <Button buttonConfig={BTN_LOGIN} onClick={() => console.log('oi')} />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_LINK_FORGOT_PASSWORD} onClick={() => callPasswordReset()} />
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
