import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: auto;

  & form {
    width: 100%;
  }

  ${({ isMobile }) => !isMobile
    && `
    margin: auto;
    width: 30%;  
  `}
`;

export const Text = styled.h1`
  margin: 20px;
`;

export const InfoBrand = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Describe = styled.h2`
  font-size: 1.12rem;
  text-align: center;
`;

export const ContainerLogin = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px
`;

export default {
  Container,
  Text,
  InfoBrand,
  Describe,
  ContainerLogin
};
