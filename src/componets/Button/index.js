import PropTypes from 'prop-types';

import {
  ButtonStyled
} from './styles';

function Button({ buttonConfig, onClick, loading }) {
  const {
    text,
    type,
    block,
    icon,
    htmlType,
    className,
    style,
    shape,
    size
  } = buttonConfig;

  return (
    <ButtonStyled
      block={block}
      type={type}
      icon={icon}
      style={style}
      htmlType={htmlType}
      className={className}
      onClick={onClick}
      shape={shape}
      size={size}
      loading={loading}
    >
      {text}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  onClick: () => {},
  loading: false
};

Button.propTypes = {
  buttonConfig: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    block: PropTypes.string,
    icon: PropTypes.element,
    htmlType: PropTypes.string,
    className: PropTypes.string,
    shape: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.shape({
      alignItems: PropTypes.string,
      display: PropTypes.string,
      borderRadius: PropTypes.string,
      justifyContent: PropTypes.string,
      marginTop: PropTypes.string
    })
  }).isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool
};

export default Button;
