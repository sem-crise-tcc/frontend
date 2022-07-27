import PropTypes from 'prop-types';

import {
  ButtonStyled
} from './styles';

function Button({ children }) {
  return (<ButtonStyled>{children}</ButtonStyled>);
}

Button.defaultProps = {
  children: ''
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button;
