import { Link } from 'react-router-dom';
import { BiCategoryAlt } from 'react-icons/bi';

import Button from '../Button';

import {
  BTN_SETTINGS,
  BTN_CUSTOMIZE_CATEGORY
} from '../../defaults/components/ButtonType';

import {
  HeaderStyled,
  ContainerUser,
  ContainerUserIcon,
  Button as ButtonTest,
  UserIcon,
  Greeting,
  UsernameStyled,
  Main,
  ContainerCategory,
  CategoryTitle,
  CategorySubtitle
} from './styles';

function Home() {
  return (
    <>
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
      </HeaderStyled>
      <Main>
        <ContainerCategory>
          <BiCategoryAlt />
          <div>
            <CategoryTitle>Personalizar categorias</CategoryTitle>
            <CategorySubtitle>Aqui você pode criar e personalizar como quiser.</CategorySubtitle>
          </div>
          <Link to="/category">
            <Button buttonConfig={BTN_CUSTOMIZE_CATEGORY} />
          </Link>
        </ContainerCategory>
      </Main>
    </>
  );
}

export default Home;
