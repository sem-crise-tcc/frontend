import styled from 'styled-components';

import { PRIMARY_COLOR, WHITE_COLOR } from '../../defaults/Colors';

export const HeaderStyled = styled.header`
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  padding: 1.5rem;
  display: flex;
  align-items: center;

  & h2 {
    color: ${WHITE_COLOR};
    margin: 0 0 0 1.5rem;
  }

  & .btn-back-page svg {
    font-size: 30px;
  }
`;

export default { HeaderStyled };
