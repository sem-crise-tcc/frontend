import { useCallback } from 'react';
import {
  Form,
  notification
} from 'antd';

import {
  closeRecoverPassword,
  callRecoverPassword
} from '../../../ducks/ApplicationDucks/RecoverPassword';

import { useDispatch } from '../../../utility/WorkspaceContext';

import {
  BTN_FORGOT_PASSWORD,
  BTN_FORGOT_PASSWORD_CANCEL
} from '../../../defaults/components/ButtonType';
import { INPUT_EMAIL } from '../../../defaults/components/InputType';

import Input from '../../Input';
import Button from '../../Button';

const { Item: FormItem } = Form;

function RecoverPassword() {
  const dispatch = useDispatch();

  const closeModal = useCallback(
    () => dispatch(closeRecoverPassword()),
    [dispatch]
  );

  const callRecoverPasswordUser = useCallback(
    (email) => dispatch(callRecoverPassword({ email })),
    [dispatch]
  );

  const onFinish = ({ email }) => {
    callRecoverPasswordUser(email);
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
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Input inputConfig={INPUT_EMAIL} />

      <FormItem>
        <Button
          buttonConfig={BTN_FORGOT_PASSWORD}
        />
      </FormItem>

      <FormItem>
        <Button
          buttonConfig={BTN_FORGOT_PASSWORD_CANCEL}
          onClick={() => {
            closeModal();
          }}
        />
      </FormItem>
    </Form>
  );
}

export default RecoverPassword;
