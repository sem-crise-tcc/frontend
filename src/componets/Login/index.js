import useWindowDimensions from '../../hooks/useWindowDimensions';

// import { openModalRecoverPassword } from '../../ducks/ApplicationDucks/RecoverPassword';

import { useSelector } from '../../utility/WorkspaceContext';

import FormLogin from './FormLogin';
import RecoverPassword from './RecoverPassword';
import {
  Container,
  Text,
  InfoBrand,
  Describe
} from './styles';

function Login() {
  const { isMobile } = useWindowDimensions();

  const isRecoverPasswordVisible = useSelector(
    ({ application }) => application.page.recoverPassword.isVisible
  );

  const text = {
    title: {
      login: 'Olá!',
      recoverPassword: 'Hey!'
    },
    describe: {
      login: 'Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab',
      recoverPassword: 'Informe seu e-mail do DinJoy'
    }
  };

  return (
    <Container isMobile={isMobile}>
      <InfoBrand>
        <img src="logo.png" alt="Logo DinJoy" />
        <Text>
          {!isRecoverPasswordVisible
            ? text.title.login
            : text.title.recoverPassword}
        </Text>
        <Describe>
          {!isRecoverPasswordVisible
            ? text.describe.login
            : text.describe.recoverPassword}
        </Describe>
      </InfoBrand>

      {!isRecoverPasswordVisible ? <FormLogin /> : <RecoverPassword />}
    </Container>

  );
}

export default Login;
