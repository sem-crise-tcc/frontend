import PropTypes from 'prop-types';

import {
  ButtonStyled
} from './styles';

function Button({ buttonConfig, onClick }) {
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
      onClick={onClick}
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
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;