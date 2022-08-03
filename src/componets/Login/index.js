import {
  Divider,
  Form,
  Input
} from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { BTN_LOGIN_GOOGLE, BTN_LOGIN } from '../../defaults/ButtonType';

import Button from '../Button';
import {
  Container,
  InfoBrand,
  Describe
} from './styles';

const { Item: FormItem } = Form;
const { Password: InputPassword } = Input;

function Login() {
  const { isMobile } = useWindowDimensions();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Container isMobile={isMobile}>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo da marca" width="200px" height="200px" />
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
      </Form>
    </Container>
  );
}

export default Login;
