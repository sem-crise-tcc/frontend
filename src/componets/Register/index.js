import { Divider, Form } from 'antd';

import { BTN_REGISTER_GOOGLE, BTN_CREATE_ACCOUNT, BTN_LOGIN } from '../../defaults/ButtonType';
import {
  INPUT_TYPE_NAME,
  INPUT_TYPE_LAST_NAME,
  INPUT_TYPE_NICKNAME,
  INPUT_TYPE_EMAIL,
  INPUT_TYPE_PASSWORD,
  INPUT_TYPE_CONFIRM_PASSWORD
} from '../../defaults/InputType';

import Button from '../Button';
import Input from '../Input';
import {
  Container, InfoBrand, Describe, ContainerLogin
} from './styles';

const { Item: FormItem } = Form;

function Register() {
  return (
    <Container>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo da marca" width="200px" height="200px" />
        <Describe>Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab</Describe>
        <Button buttonConfig={BTN_REGISTER_GOOGLE} />
      </InfoBrand>

      <Divider>ou</Divider>

      <Form>
        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_NAME} />
        </FormItem>

        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_LAST_NAME} />
        </FormItem>

        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_NICKNAME} />
        </FormItem>

        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_EMAIL} />
        </FormItem>

        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_PASSWORD} />
        </FormItem>

        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input inputConfig={INPUT_TYPE_CONFIRM_PASSWORD} />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_CREATE_ACCOUNT} />
        </FormItem>
      </Form>

      <ContainerLogin>
        <span>
          Já tem uma conta?
        </span>
        <Button buttonConfig={BTN_LOGIN} />
      </ContainerLogin>
    </Container>
  );
}

export default Register;
