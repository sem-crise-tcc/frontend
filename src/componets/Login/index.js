import {
  Divider,
  Form,
  Input,
  notification
} from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { BTN_LOGIN_GOOGLE, BTN_LOGIN, BTN_FORGOT_PASSWORD } from '../../defaults/ButtonType';

import Button from '../Button';
import {
  Container,
  Text,
  InfoBrand,
  Describe
} from './styles';

const { Item: FormItem } = Form;
const { Password: InputPassword } = Input;

function Login() {
  const { isMobile } = useWindowDimensions();

  const onFinish = ({ email, password }) => {
    console.log('Success:', email, password);

    if (!email) {
      notification.warning({
        message: 'Ops!',
        description:
          'E-mail e/ou senha inválidos. Por favor, tente novamente.'
      });
    }
  };

  return (
    <Container isMobile={isMobile}>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo DinJoy" />
        <Text>Olá!</Text>
        <Describe>Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab</Describe>
        <Button buttonConfig={BTN_LOGIN_GOOGLE} />
      </InfoBrand>

      <Divider>ou</Divider>

      <Form
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormItem
          name="email"
        >
          <Input placeholder="E-mail" />
        </FormItem>

        <FormItem
          name="password"
        >
          <InputPassword placeholder="Senha" />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_LOGIN} />
        </FormItem>

        <FormItem>
          <Button buttonConfig={BTN_FORGOT_PASSWORD} />
        </FormItem>
      </Form>
    </Container>
  );
}

export default Login;
