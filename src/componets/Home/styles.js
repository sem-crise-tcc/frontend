import styled from 'styled-components';

import { PRIMARY_COLOR, WHITE_COLOR } from '../../defaults/Colors';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;

  & .btn-settings svg {
    color: ${PRIMARY_COLOR};
    font-size: 24px;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerUserIcon = styled.div``;

export const UserIcon = styled.img``;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const UsernameStyled = styled.strong`
  color: ${WHITE_COLOR};
`;

export const Button = styled.button`
  background: #959595;
  border: 2px solid blue;
  border-radius: 50px;
  height: 5rem;
  width: 5rem;
`;

export default {
  HeaderStyled,
  ContainerUser,
  ContainerUserIcon,
  Button,
  UserIcon,
  Greeting,
  UsernameStyled
};
