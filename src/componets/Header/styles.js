import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem;
`;

export const UserIcon = styled.img``;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UsernameStyled = styled.strong``;

export const Button = styled.button`
  background: red;
  border: 2px solid blue;
  border-radius: 50px;
  height: 5rem;
  width: 5rem;
`;

export default {
  HeaderStyled,
  Button,
  UserIcon,
  Greeting,
  UsernameStyled
};
