import { Form } from 'antd';

import Input from '../Input';
import Button from '../Button';

import {
  CHANGE_USER_IMAGE,
  FORM_SAVE,
  FORM_CANCEL
} from '../../defaults/components/ButtonType';

import {
  INPUT_USERNAME,
  INPUT_LASTNAME,
  INPUT_NICKNAME,
  INPUT_PASSWORD
} from '../../defaults/components/InputType';

import {
  Container,
  Main,
  FormItem,
  UserIcon,
  Footer
} from './styles';

function EditProfile() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Main>
          <FormItem className="edit-profile__form__field__img">
            <UserIcon src="logo.png" alt="Photo user" />
            <Button buttonConfig={CHANGE_USER_IMAGE} />
          </FormItem>

          <Input inputConfig={INPUT_USERNAME} />

          <Input inputConfig={INPUT_LASTNAME} />

          <Input inputConfig={INPUT_NICKNAME} />

          <Input inputConfig={INPUT_PASSWORD} />
        </Main>

        <Footer>
          <Button buttonConfig={FORM_CANCEL} />
          <Button buttonConfig={FORM_SAVE} onClick={() => onFinish()} />
        </Footer>
      </Form>
    </Container>
  );
}

export default EditProfile;
