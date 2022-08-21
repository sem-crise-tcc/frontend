import styled from 'styled-components';
import { Form } from 'antd';

export const Container = styled.div`
  height: 100%;
  margin: 1.5rem;

  & form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
`;

export const Main = styled.div``;

export const FormItem = styled(Form.Item)`
  width: 100%;

  &.edit-profile__form__field__img .ant-form-item-control-input-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserIcon = styled.img`
  border-radius: 30px;
  height: 100px;
  margin-bottom: 1.5rem;
  width: 100px;
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export default {
  Container,
  Main,
  FormItem,
  UserIcon,
  Footer
};
