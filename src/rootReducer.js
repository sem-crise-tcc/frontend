import { combineReducers } from 'redux';
import application from './ducks/ApplicationDucks';
/* eslint default-param-last: off */

const createReducer = ([initialState, actionHandlers]) => (
  state = initialState,
  action
) => (actionHandlers[action.type] && actionHandlers[action.type](state, action))
  || state;

const createRootReducer = () => combineReducers({
  search: createReducer(application)
});

export default createRootReducer;
