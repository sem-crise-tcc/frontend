import PropTypes from 'prop-types';

import {
  ButtonStyled
} from './styles';

function Button({ buttonConfig }) {
  const {
    text,
    type,
    block,
    icon,
    htmlType,
    style
  } = buttonConfig;

  return (
    <ButtonStyled
      block={block}
      type={type}
      icon={icon}
      style={style}
      htmlType={htmlType}
    >
      {text}
    </ButtonStyled>
  );
}

Button.propTypes = {
  buttonConfig: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    block: PropTypes.string,
    icon: PropTypes.element,
    htmlType: PropTypes.string,
    style: PropTypes.shape({
      alignItems: PropTypes.string,
      display: PropTypes.string,
      borderRadius: PropTypes.string,
      justifyContent: PropTypes.string,
      marginTop: PropTypes.string
    })
  }).isRequired
};

export default Button;
