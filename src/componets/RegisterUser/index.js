import { useCallback } from 'react';
import {
  Divider, Form, Input, message
} from 'antd';
import { Link } from 'react-router-dom';

import { callRegisterUser } from '../../ducks/ApplicationDucks/RegisterUser';

import { RULE_PASSWORD_TYPES } from '../../defaults/RulePasswordType';

import { useDispatch } from '../../utility/WorkspaceContext';
import { getRuleField } from '../../utility/RuleField';
import { validationRegexPassword } from '../../utility/ValidationRegexPassword';

import ApplicationAPI from '../../integrations/ApplicationAPI';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { BTN_REGISTER_GOOGLE, BTN_CREATE_ACCOUNT, BTN_LOGIN_LINK } from '../../defaults/ButtonType';
import {
  REGISTER_FIELD_FIRST_NAME,
  REGISTER_FIELD_LAST_NAME,
  REGISTER_FIELD_NICKNAME,
  REGISTER_FIELD_EMAIL,
  REGISTER_FIELD_PASSWORD
} from '../../defaults/RegisterFields';

import Button from '../Button';
import RulePassword from './RulePassword';
import {
  Container, InfoBrand, Describe, ContainerLogin, PasswordValidBlock
} from './styles';

const { Item: FormItem } = Form;
const { Password: InputPassword } = Input;

function RegisterUser() {
  const dispatch = useDispatch();
  const { isMobile } = useWindowDimensions();

  const callReloadSearch = useCallback(
    (searchBody) => dispatch(callRegisterUser({ searchBody })),
    [dispatch]
  );

  const onFinish = (values) => {
    try {
      const {
        username,
        lastname,
        nickname,
        email,
        password,
        'confirm-password': confirmPassword
      } = values;

      const searchBody = {
        username,
        lastname,
        nickname,
        email,
        password,
        confirmPassword
      };

      callReloadSearch(searchBody);
    } catch (error) {
      console.log('eror', error);
    }
  };

  const onFinishFailed = (errors) => {
    if (errors) {
      message.error('Por favor, preencha os campos corretamente.');
    }
  };

  return (
    <Container isMobile={isMobile}>
      <InfoBrand>
        <img src="logo.png" alt="Logo da marca" />
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
          rules={[
            {
              type: 'email',
              message: 'Não é um e-mail válido.'
            },
            getRuleField(REGISTER_FIELD_EMAIL)
          ]}
        >
          <Input placeholder="E-mail" />
        </FormItem>

        <FormItem
          name="password"
          hasFeedback
          rules={[
            ({
              validator: (_, value) => validationRegexPassword(value)
            })
          ]}
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
                return Promise.reject(new Error('A confirmação de senha não confere.'));
              }
            })
          ]}
        >
          <InputPassword placeholder="Confirmar senha" />
        </FormItem>

        <PasswordValidBlock>
          {RULE_PASSWORD_TYPES.map(({ icon, text }, index) => (
            <RulePassword key={index} icon={icon} text={text} />
          ))}
        </PasswordValidBlock>

        <FormItem>
          <Button buttonConfig={BTN_CREATE_ACCOUNT} />
        </FormItem>
      </Form>

      <ContainerLogin>
        <span>
          Já tem uma conta?
        </span>
        <Link to="/login">
          <Button buttonConfig={BTN_LOGIN_LINK} />
        </Link>
      </ContainerLogin>
    </Container>
  );
}

export default RegisterUser;
