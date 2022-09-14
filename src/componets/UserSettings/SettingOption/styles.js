import styled from 'styled-components';

import {
  PRIMARY_COLOR, BLUE_LIGHT
} from '../../../defaults/Colors';

export const SettingOptionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p, strong {
    margin: 0 0 0 12px;
  }
`;

export const SettionOptionIcon = styled.div`
  width: 50px;
  height: 50px;
  color: ${PRIMARY_COLOR};
  background: ${BLUE_LIGHT};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export default {
  SettingOptionInfo, SettionOptionIcon
};
