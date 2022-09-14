import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;

  & h3 { 
    font-size: 18px;
    margin-top: 24px;
  }

  & form {
    margin-top: 12px;
  }
`;

export const Main = styled.div``;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  width: 100%;
`;

export const PasswordValidBlock = styled.div``;

export default {
  Container,
  Main,
  PasswordValidBlock,
  Footer
};
