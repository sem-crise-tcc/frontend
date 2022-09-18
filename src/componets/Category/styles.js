import styled from 'styled-components';
import { Tabs as TabsAntd } from 'antd';

const { TabPane: TabPaneAntd } = TabsAntd;

export const Container = styled.div`
  & .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`
  padding: 1rem;
`;

export const Tabs = styled(TabsAntd)`
  ${({ tabcolor }) => tabcolor && `
    & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${tabcolor};
    }
    & .ant-tabs-ink-bar {
      background-color: ${tabcolor};
    }
  `}
`;

export const TabPane = styled(TabPaneAntd)`
`;

export const TabPaneTitle = styled.p`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export default {
  Container,
  Main,
  Tabs,
  TabPane,
  TabPaneTitle
};
