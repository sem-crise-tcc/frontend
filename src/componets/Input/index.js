import PropTypes from 'prop-types';

import {
  InputStyled
} from './styles';

function Input({ placeholder }) {
  return (
    <InputStyled placeholder={placeholder} />
  );
}

Input.defaultProps = {
  placeholder: ''
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export default Input;
