import PropTypes from 'prop-types';

import {
  InputStyled
} from './styles';

function Input({ inputConfig }) {
  const { placeholder } = inputConfig;
  return (
    <InputStyled placeholder={placeholder} />
  );
}

Input.defaultProps = {
  inputConfig: {}
};

Input.propTypes = {
  inputConfig: PropTypes.shape({
    placeholder: PropTypes.string
  })
};

export default Input;
