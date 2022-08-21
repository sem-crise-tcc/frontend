import { useCallback } from 'react';
import {
  Form,
  notification
} from 'antd';

import { closePasswordReset } from '../../../ducks/ApplicationDucks/PasswordReset';

import { useDispatch } from '../../../utility/WorkspaceContext';

import {
  BTN_FORGOT_PASSWORD,
  BTN_FORGOT_PASSWORD_CANCEL
} from '../../../defaults/components/ButtonType';
import { INPUT_EMAIL } from '../../../defaults/components/InputType';

import Input from '../../Input';
import Button from '../../Button';

const { Item: FormItem } = Form;

function PasswordReset() {
  const dispatch = useDispatch();

  const closeModal = useCallback(
    () => dispatch(closePasswordReset()),
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
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Input inputConfig={INPUT_EMAIL} />

      <FormItem>
        <Button
          buttonConfig={BTN_FORGOT_PASSWORD}
          onClick={() => {
            // todo: await endpoint forgot password
            closeModal();
          }}
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

export default PasswordReset;
