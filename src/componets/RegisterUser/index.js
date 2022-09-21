import { useCallback } from 'react';
import {
  Divider, Form, message
} from 'antd';
import { Link } from 'react-router-dom';

import { callRegisterUser } from '../../ducks/ApplicationDucks/RegisterUser';

import { useDispatch, useSelector } from '../../utility/WorkspaceContext';
import { getRuleField } from '../../utility/RuleField';
import { validationRegexPassword } from '../../utility/ValidationRegexPassword';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { RULE_PASSWORD_TYPES } from '../../defaults/RulePasswordType';
import {
  BTN_REGISTER_GOOGLE,
  BTN_CREATE_ACCOUNT,
  BTN_LOGIN_LINK
} from '../../defaults/components/ButtonType';
import {
  INPUT_USERNAME,
  INPUT_LASTNAME,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD
} from '../../defaults/components/InputType';
import {
  REGISTER_FIELD_FIRST_NAME,
  REGISTER_FIELD_LAST_NAME,
  REGISTER_FIELD_NICKNAME,
  REGISTER_FIELD_EMAIL,
  REGISTER_FIELD_PASSWORD
} from '../../defaults/RegisterFields';

import Input from '../Input';
import Button from '../Button';
import RulePassword from '../RulePassword';
import {
  Container, InfoBrand, Describe, ContainerLogin, PasswordValidBlock
} from './styles';

const { Item: FormItem } = Form;

function RegisterUser() {
  const { isMobile } = useWindowDimensions();

  const isLoading = useSelector(
    ({ application }) => application.loading.register
  );

  const dispatch = useDispatch();

  const callReloadSearch = useCallback(
    (searchBody) => dispatch(callRegisterUser({ searchBody })),
    [dispatch]
  );

  const onFinish = (values) => {
    try {
      const {
        username,
        lastname,
        // nickname,
        email,
        password,
        'confirm-password': confirmPassword
      } = values;

      const searchBody = {
        name: username,
        lastname,
        // nickname,
        email,
        password,
        confirmPassword
      };

      callReloadSearch(searchBody);
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFinishFailed = (errors) => {
    if (errors) {
      message.error('Por favor, preencha os campos corretamente.');
    }
  };

  console.log('isLoading', isLoading);

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
        <Input
          inputConfig={INPUT_USERNAME}
          rules={[getRuleField(REGISTER_FIELD_FIRST_NAME)]}
        />

        <Input
          inputConfig={INPUT_LASTNAME}
          rules={[getRuleField(REGISTER_FIELD_LAST_NAME)]}
        />

        <Input
          inputConfig={INPUT_NICKNAME}
          rules={[getRuleField(REGISTER_FIELD_NICKNAME)]}
        />

        <Input
          inputConfig={INPUT_EMAIL}
          rules={[
            {
              type: 'email',
              message: 'Não é um e-mail válido.'
            },
            getRuleField(REGISTER_FIELD_EMAIL)
          ]}
        />

        <Input
          inputConfig={INPUT_PASSWORD}
          hasFeedback
          rules={[
            ({
              validator: (_, value) => validationRegexPassword(value)
            })
          ]}
        />

        <Input
          inputConfig={INPUT_CONFIRM_PASSWORD}
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
        />

        <PasswordValidBlock>
          {RULE_PASSWORD_TYPES.map(({ icon, text }, index) => (
            <RulePassword key={index} icon={icon} text={text} />
          ))}
        </PasswordValidBlock>

        <FormItem>
          <Button buttonConfig={BTN_CREATE_ACCOUNT} loading={isLoading} />
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
