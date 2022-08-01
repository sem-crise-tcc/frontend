import {
  Divider, Form, Input, message
} from 'antd';

import { BTN_REGISTER_GOOGLE, BTN_CREATE_ACCOUNT, BTN_LOGIN } from '../../defaults/ButtonType';
import {
  REGISTER_FIELD_FIRST_NAME,
  REGISTER_FIELD_LAST_NAME,
  REGISTER_FIELD_NICKNAME,
  REGISTER_FIELD_EMAIL,
  REGISTER_FIELD_PASSWORD
} from '../../defaults/RegisterFields';

import { getRuleField } from '../utility/RuleField';

import Button from '../Button';
import {
  Container, InfoBrand, Describe, ContainerLogin
} from './styles';

const { Item: FormItem } = Form;
const { Password: InputPassword } = Input;

function Register() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errors) => {
    if (errors) {
      message.error('Por favor, preencha os campos corretamente.');
    }
  };

  return (
    <Container>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo da marca" width="200px" height="200px" />
        <Describe>Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab</Describe>
        <Button buttonConfig={BTN_REGISTER_GOOGLE} />
      </InfoBrand>

      <Divider>ou</Divider>

      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem
          name="username"
          rules={[getRuleField(REGISTER_FIELD_FIRST_NAME)]}
        >
          <Input placeholder="Nome" />
        </FormItem>

        <FormItem
          name="lastname"
          rules={[getRuleField(REGISTER_FIELD_LAST_NAME)]}
        >
          <Input placeholder="Sobrenome" />
        </FormItem>

        <FormItem
          name="nickname"
          rules={[getRuleField(REGISTER_FIELD_NICKNAME)]}
        >
          <Input placeholder="Apelido" />
        </FormItem>

        <FormItem
          name="email"
          rules={[getRuleField(REGISTER_FIELD_EMAIL)]}
        >
          <Input placeholder="E-mail" />
        </FormItem>

        <FormItem
          name="password"
          hasFeedback
          rules={[getRuleField(REGISTER_FIELD_PASSWORD)]}
        >
          <InputPassword placeholder="Senha" />
        </FormItem>

        <FormItem
          name="confirm-password"
          hasFeedback
          rules={[
            getRuleField(REGISTER_FIELD_PASSWORD),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('A confirmação de senha não confere'));
              }
            })
          ]}
        >
          <InputPassword placeholder="Confirmar senha" />
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
