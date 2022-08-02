import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 margin: 5px 0;
`;

export const CircleIcon = styled.div`
  align-items: center;
  background: #c7c7c7;
  border-radius: 50px;
  display: flex;
  height: 20px;
  justify-content: center;
  margin-right: 5px;
  width: 20px;
  `;

export const Text = styled.span``;

export default {
  Container,
  CircleIcon,
  Text
};
