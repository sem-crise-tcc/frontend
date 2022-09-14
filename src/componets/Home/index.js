import { Link } from 'react-router-dom';

import Button from '../Button';

import {
  BTN_SETTINGS
} from '../../defaults/components/ButtonType';

import {
  HeaderStyled,
  ContainerUser,
  ContainerUserIcon,
  Button as ButtonTest,
  UserIcon,
  Greeting,
  UsernameStyled
} from './styles';

function Home() {
  return (
    <HeaderStyled>
      <ContainerUser>
        <ContainerUserIcon>
          <Link to="/edit-profile">
            <ButtonTest onClick={() => console.log('oi')}>
              <UserIcon />
            </ButtonTest>
          </Link>
        </ContainerUserIcon>

        <Greeting>
          Olá,
          <UsernameStyled>Anna!</UsernameStyled>
        </Greeting>
      </ContainerUser>

      <Link to="/user-settings">
        <Button buttonConfig={BTN_SETTINGS} />
      </Link>

      {/* <div>btn notificação</div> */}
    </HeaderStyled>
  );
}

export default Home;
