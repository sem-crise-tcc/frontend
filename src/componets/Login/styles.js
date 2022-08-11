import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
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

export default {
  Container,
  Text,
  InfoBrand,
  Describe
};
