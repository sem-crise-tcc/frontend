import useWindowDimensions from '../../hooks/useWindowDimensions';

// import { openModalRecoverPassword } from '../../ducks/ApplicationDucks/RecoverPassword';

import { useSelector } from '../../utility/WorkspaceContext';

import FormLogin from './FormLogin';
import PasswordReset from './PasswordReset';
import {
  Container,
  Text,
  InfoBrand,
  Describe
} from './styles';

function Login() {
  const { isMobile } = useWindowDimensions();

  const isPasswordResetVisible = useSelector(
    ({ application }) => application.page.passwordReset.isVisible
  );

  const text = {
    title: {
      login: 'Olá!',
      passwordReset: 'Hey!'
    },
    describe: {
      login: 'Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab',
      passwordReset: 'Informe seu e-mail do DinJoy'
    }
  };

  return (
    <Container isMobile={isMobile}>
      <InfoBrand>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo DinJoy" />
        <Text>
          {!isPasswordResetVisible
            ? text.title.login
            : text.title.passwordReset}
        </Text>
        <Describe>
          {!isPasswordResetVisible
            ? text.describe.login
            : text.describe.passwordReset}
        </Describe>
      </InfoBrand>

      {!isPasswordResetVisible ? <FormLogin /> : <PasswordReset />}
    </Container>

  );
}

export default Login;
