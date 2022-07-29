import {
  Divider, Form, Input, message
} from 'antd';

import { BTN_REGISTER_GOOGLE, BTN_CREATE_ACCOUNT, BTN_LOGIN } from '../../defaults/ButtonType';

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
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu nome.'
            }
          ]}
        >
          <Input placeholder="Nome" />
        </FormItem>

        <FormItem
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu sobrenome.'
            }
          ]}
        >
          <Input placeholder="Sobrenome" />
        </FormItem>

        <FormItem
          name="nickname"
        >
          <Input placeholder="Apelido" />
        </FormItem>

        <FormItem
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu e-mail.'
            }
          ]}
        >
          <Input placeholder="E-mail" />
        </FormItem>

        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha.'
            }
          ]}
        >
          <InputPassword placeholder="Senha" />
        </FormItem>

        <FormItem
          name="confirm-password"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua confirmação de senha.'
            }
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
