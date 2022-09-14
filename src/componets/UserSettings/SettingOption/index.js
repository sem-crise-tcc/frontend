import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  SettingOptionInfo, SettionOptionIcon
} from './styles';

import { ContainerOption } from '../styles';

function SettingOption({
  icon, title, subTitle, button, btnSwitch, buttonRedirect
}) {
  return (
    <ContainerOption className="setting-option">
      <SettingOptionInfo>
        {icon && (
          <SettionOptionIcon>
            {icon}
          </SettionOptionIcon>
        )}

        <div>
          <strong>{title}</strong>
          <p>{subTitle}</p>
        </div>
      </SettingOptionInfo>
      {button && (
        <Link to={`/${buttonRedirect}`}>
          {button}
        </Link>
      )}
      {btnSwitch}
    </ContainerOption>
  );
}

SettingOption.defaultProps = {
  subTitle: '',
  button: null,
  btnSwitch: null,
  buttonRedirect: ''
};

SettingOption.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  button: PropTypes.element,
  btnSwitch: PropTypes.element,
  buttonRedirect: PropTypes.string
};

export default SettingOption;
