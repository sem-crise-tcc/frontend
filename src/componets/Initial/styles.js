import styled from 'styled-components';

import { PRIMARY_COLOR } from '../../defaults/Colors';

export const Container = styled.div`
  background-color: ${PRIMARY_COLOR};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div``;

export const Title = styled.h1``;

export const Description = styled.h3``;

export const GetStarted = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  Container,
  DescriptionContainer,
  Title,
  Description,
  GetStarted
};
