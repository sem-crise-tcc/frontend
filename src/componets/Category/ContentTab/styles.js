import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.div``;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const ContainerIcon = styled.div`
  height: 42px;
  width: 42px;
  background: red;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
`;

export const CategoryLabel = styled.p`
  margin: 0;
`;

export default {
  Container,
  List,
  CategoryContainer,
  ContainerIcon,
  CategoryLabel
};
