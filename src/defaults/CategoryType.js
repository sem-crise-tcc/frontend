import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md';

import { MEDIUM_RED_COLOR, MEDIUM_GREEN_COLOR } from './Colors';
import {
  BTN_ADD_CATEGORY_EXPENSE,
  BTN_ADD_CATEGORY_EARNING
} from './components/ButtonType';

export const EXPENSE = {
  title: 'Despesas',
  tabColor: MEDIUM_RED_COLOR,
  tabIcon: <MdMoneyOffCsred />,
  key: '0',
  btnConfig: BTN_ADD_CATEGORY_EXPENSE
};

export const EARNING = {
  title: 'Receitas',
  tabColor: MEDIUM_GREEN_COLOR,
  tabIcon: <MdAttachMoney />,
  key: '1',
  btnConfig: BTN_ADD_CATEGORY_EARNING
};

export default {
  EXPENSE,
  EARNING
};
