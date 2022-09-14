import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';

import Input from '../Input';
import Button from '../Button';
import RulePassword from '../RulePassword';
import Header from '../Header';

import { useSelector, useDispatch } from '../../utility/WorkspaceContext';
import { getRuleField } from '../../utility/RuleField';
import { validationRegexPassword } from '../../utility/ValidationRegexPassword';

import { callEditProfile } from '../../ducks/ApplicationDucks/EditProfile';

import {
  REGISTER_FIELD_EMAIL
} from '../../defaults/RegisterFields';
import {
  BTN_FORM_SAVE,
  BTN_FORM_CANCEL
} from '../../defaults/components/ButtonType';
import {
  INPUT_USERNAME,
  INPUT_LASTNAME,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_CURRENT_PASSWORD,
  INPUT_NEW_PASSWORD,
  INPUT_CONFIRM_NEW_PASSWORD
} from '../../defaults/components/InputType';
import { RULE_PASSWORD_TYPES } from '../../defaults/RulePasswordType';

import {
  Container,
  Main,
  PasswordValidBlock,
  Footer
} from './styles';

function EditProfile() {
  const dispatch = useDispatch();

  const handleEditProfile = useCallback(
    (searchBody) => dispatch(callEditProfile({ searchBody })),
    [dispatch]
  );

  const isLoading = useSelector(
    ({ application }) => application.loading.editProfile
  );

  const onFinish = (values) => {
    try {
      const {
        username,
        lastname,
        nickname,
        email,
        'current-password': currentPassword,
        'confirm-new-password': confirmNewPassword,
        'confirm-password': confirmPassword
      } = values;

      const searchBody = {
        username,
        lastname,
        nickname,
        email,
        currentPassword,
        confirmNewPassword,
        confirmPassword
      };

      handleEditProfile(searchBody);
    } catch (error) {
      console.log('error', error);
    }
  };

  console.log('isLoading', isLoading);

  return (
    <>
      <Header title="Perfil" backPageLink="user-settings" />

      <Container>
        <h3>Informações pessoais</h3>

        <Form onFinish={onFinish} autoComplete="off">
          <Main>
            <Input inputConfig={INPUT_USERNAME} />
            <Input inputConfig={INPUT_LASTNAME} />
            <Input inputConfig={INPUT_NICKNAME} />
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
            <Input inputConfig={INPUT_CURRENT_PASSWORD} />
            <Input
              inputConfig={INPUT_NEW_PASSWORD}
              rules={[
                ({
                  validator: (_, value) => value?.length && validationRegexPassword(value)
                })
              ]}
            />
            <Input
              inputConfig={INPUT_CONFIRM_NEW_PASSWORD}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('new-password') === value) {
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
          </Main>

          <Footer>
            <Link to="/user-settings">
              <Button buttonConfig={BTN_FORM_CANCEL} />
            </Link>

            <Button
              buttonConfig={BTN_FORM_SAVE}
              loading={isLoading}
            />
          </Footer>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
