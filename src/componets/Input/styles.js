import styled from 'styled-components';
import { Form } from 'antd';

import { PRIMARY_COLOR } from '../../defaults/Colors';

export const FormItem = styled(Form.Item)`
  width: 100%;

  .anticon svg {
    color: ${PRIMARY_COLOR};
  }
`;

export default { FormItem };
