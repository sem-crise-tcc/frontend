import { Divider } from 'antd';

import { BTN_REGISTER_GOOGLE, BTN_CREATE_ACCOUNT, BTN_LOGIN } from '../../defaults/ButtonType';
import Button from '../Button';
import Input from '../Input';
import { Container, InfoBrand, Describe } from './styles';

function Register() {
  return (
    <Container>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo da marca" width="200px" height="200px" />
        <Describe>Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab</Describe>
        <Button buttonConfig={BTN_REGISTER_GOOGLE} />
      </InfoBrand>

      <Divider>ou</Divider>

      <Input placeholder="Nome" />
      <Input placeholder="Sobrenome" />
      <Input placeholder="Apelido" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar senha" />

      <Button buttonConfig={BTN_CREATE_ACCOUNT} />
      <span>
        Já tem uma conta?
        {' '}
        <Button buttonConfig={BTN_LOGIN} />
      </span>

    </Container>
  );
}

export default Register;
