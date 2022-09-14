import styled from 'styled-components';

import {
  LIGHT_MODE_BACKGROUND_BODY
} from '../../defaults/Colors';

export const Container = styled.div`
  padding: 1.5rem;

  & h3 { 
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const SettingOption = styled.div`
  background: ${LIGHT_MODE_BACKGROUND_BODY};
  border-radius: 3px;
`;

export const SettingOptionInfo = styled.div``;

export const SettionOptionIcon = styled.div``;

export const ContainerOption = styled.div.attrs({
  className: 'container-option'
})`
  border-radius: 3px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  margin: 12px 0;

  & .btn-settings-option-open svg {
    font-size: 24px;
  }
`;

export default {
  Container, SettingOption, SettingOptionInfo, SettionOptionIcon, ContainerOption
};
