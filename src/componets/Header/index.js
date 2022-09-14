import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BTN_BACK_PAGE } from '../../defaults/components/ButtonType';

import Button from '../Button';

import {
  HeaderStyled
} from './styles';

function Header({ title, backPageLink }) {
  return (
    <HeaderStyled>
      <Link to={`/${backPageLink}`}>
        <Button buttonConfig={BTN_BACK_PAGE} />
      </Link>

      <h2>{title}</h2>
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backPageLink: PropTypes.string.isRequired
};

export default Header;
