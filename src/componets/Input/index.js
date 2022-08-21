import PropTypes from 'prop-types';
import { Input as InputAntd } from 'antd';

import { FormItem } from './styles';

const INPUT_TYPE_PASSWORD = 'password';

function Input({ inputConfig, hasFeedback, rules }) {
  const {
    placeholder, name, type
  } = inputConfig;

  return (
    <FormItem name={name} hasFeedback={hasFeedback} rules={rules}>
      {type === INPUT_TYPE_PASSWORD ? (
        <InputAntd.Password placeholder={placeholder} />
      ) : (
        <InputAntd placeholder={placeholder} />
      )}
    </FormItem>
  );
}

Input.defaultProps = {
  rules: '',
  hasFeedback: false
};

Input.propTypes = {
  inputConfig: PropTypes.shape({
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  rules: PropTypes.arrayOf(PropTypes.obj),
  hasFeedback: PropTypes.bool
};

export default Input;
