import {
  HeaderStyled,
  Button,
  UserIcon,
  Greeting,
  UsernameStyled
} from './styles';

function Header() {
  return (
    <HeaderStyled>
      <Button onClick={() => console.log('oi')}>
        <UserIcon />
      </Button>

      <Greeting>
        Olá,
        <UsernameStyled>Anna</UsernameStyled>
      </Greeting>

      <div>btn notificação</div>
    </HeaderStyled>
  );
}

export default Header;
