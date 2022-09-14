import { useCallback } from 'react';
import {
  Divider,
  Form,
  notification
} from 'antd';
import { Link } from 'react-router-dom';

import { openRecoverPassword } from '../../../ducks/ApplicationDucks/RecoverPassword';
import { callLogin } from '../../../ducks/ApplicationDucks/Login';

import { useDispatch, useSelector } from '../../../utility/WorkspaceContext';

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

  const isLoading = useSelector(
    ({ application }) => application.loading.login
  );

  const callOpenRecoverPassword = useCallback(
    () => dispatch(openRecoverPassword()),
    [dispatch]
  );

  const callUserLogin = useCallback(
    (searchBody) => dispatch(callLogin({ searchBody })),
    [dispatch]
  );

  const onFinish = ({ email, password }) => {
    const searchBody = {
      email,
      password
    };

    callUserLogin(searchBody);
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
          <Button buttonConfig={BTN_LOGIN} loading={isLoading} />
        </FormItem>

        <FormItem>
          <Button
            buttonConfig={BTN_LINK_FORGOT_PASSWORD}
            onClick={() => callOpenRecoverPassword()}
          />
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
