import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem;
`;

export const InfoBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Describe = styled.h2`
  font-size: 1.12rem;
  text-align: center;
  margin-top: 24px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px
`;

export const PasswordValidBlock = styled.div`
  padding-bottom: 20px;
`;

export default {
  Container, InfoBrand, Describe, ContainerLogin, PasswordValidBlock
};
