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

export const Main = styled.main`
  padding: 1rem;
`;

export const ContainerCategory = styled.div`
  align-items: center;
  background: #EEEEEE;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 15% 67% 15%;
  gap: 5px;
  box-shadow: 4px 4px 10px #9b9b9b;
  padding: 5px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > svg {
    background: #fff;
    width: 42px;
    height: 42px;
    border-radius: 30px;
    padding: 5px;
    box-shadow: 4px 4px 10px #9b9b9b;
    color: ${PRIMARY_COLOR};
  }
`;

export const CategoryTitle = styled.strong`
  font-size: 16px;
`;

export const CategorySubtitle = styled.span`
  font-size: 12px;
`;

export default {
  HeaderStyled,
  ContainerUser,
  ContainerUserIcon,
  Button,
  UserIcon,
  Greeting,
  UsernameStyled,
  Main,
  ContainerCategory,
  CategoryTitle,
  CategorySubtitle
};
