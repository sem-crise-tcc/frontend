import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
  max-width: 31rem;

  & form {
    width: 100%;
  }

  ${({ isMobile }) => !isMobile
    && `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
