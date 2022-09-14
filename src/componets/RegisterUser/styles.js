import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  margin: auto;
  width: 90%;

  & form {
    width: 100%;
  }

  ${({ isMobile }) => !isMobile
    && `
    margin: auto;
    width: 30%;  
  `}
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
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px
`;

export const PasswordValidBlock = styled.div`
  padding-bottom: 20px;
`;

export default {
  Container, InfoBrand, Describe, ContainerLogin, PasswordValidBlock
};
