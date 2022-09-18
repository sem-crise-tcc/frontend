// import { Link } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';
import { MdOutlineDirectionsTransitFilled, MdOutlineSchool } from 'react-icons/md';

// import Button from '../Button';
import { useState } from 'react';
import Header from '../Header';
import ContentTab from './ContentTab';

// import {
//   BTN_ADD_CATEGORY_EXPENSE,
//   BTN_ADD_CATEGORY_EARNING
// } from '../../defaults/components/ButtonType';

import {
  CATEGORY_COLOR_BLUE,
  CATEGORY_COLOR_GREEN,
  CATEGORY_COLOR_ORANGE
} from '../../defaults/Colors';
import {
  EXPENSE,
  EARNING
} from '../../defaults/CategoryType';

import {
  Container,
  Main,
  Tabs,
  TabPane,
  TabPaneTitle
} from './styles';

// const categories = ['EXPENSE', 'EARNING'];

function Category() {
  const [tabColor, setTabColor] = useState(EXPENSE);

  const defaultActiveTab = '0';

  const onChangeTab = (key) => {
    if (key === defaultActiveTab) {
      setTabColor(EXPENSE);
      return;
    }

    setTabColor(EARNING);
  };

  const tst = [
    {
      id: 1,
      title: 'Despesas fixas',
      icon: <BsHouse />,
      color: CATEGORY_COLOR_BLUE,
      subCategories: [
        { id: 2, label: 'Planos/serviços' },
        { id: 3, label: 'Mercado' }
      ]
    },
    {
      id: 4,
      title: 'Educação',
      icon: <MdOutlineSchool />,
      color: CATEGORY_COLOR_GREEN,
      subCategories: [
        { id: 5, label: 'Curso' },
        { id: 6, label: 'Faculdade' },
        { id: 7, label: 'Livros' }
      ]
    },
    {
      id: 7,
      title: 'Transporte',
      icon: <MdOutlineDirectionsTransitFilled />,
      color: CATEGORY_COLOR_ORANGE,
      subCategories: []
    }
  ];

  return (
    <Container>
      <Header
        title="Categorias"
        backPageLink="home"
        backgroundColor={tabColor.tabColor}
      />

      <Main>
        <Tabs
          defaultActiveKey="0"
          onChange={onChangeTab}
          tabcolor={tabColor.tabColor}
        >
          <>
            <TabPane
              tab={(
                <TabPaneTitle>
                  {EXPENSE.title}
                  {EXPENSE.tabIcon}
                </TabPaneTitle>
              )}
              key={EXPENSE.key}
            >
              <ContentTab btnConfig={EXPENSE.btnConfig} categories={tst} />
            </TabPane>
            <TabPane
              tab={(
                <TabPaneTitle>
                  {EARNING.title}
                  {EARNING.tabIcon}
                </TabPaneTitle>
              )}
              key={EARNING.key}
            >
              <ContentTab btnConfig={EARNING.btnConfig} />
            </TabPane>
          </>
        </Tabs>
      </Main>
    </Container>
  );
}

export default Category;
