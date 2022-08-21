import { Link } from 'react-router-dom';

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
      <Link to="/edit-profile">
        <Button onClick={() => console.log('oi')}>
          <UserIcon />
        </Button>
      </Link>

      <Greeting>
        Olá,
        <UsernameStyled>Anna</UsernameStyled>
      </Greeting>

      <div>btn notificação</div>
    </HeaderStyled>
  );
}

export default Header;
