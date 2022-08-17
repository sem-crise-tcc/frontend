import React from 'react';
import {
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux';

export const WorkspaceContext = React.createContext(null);

export const useStore = createStoreHook(WorkspaceContext);
export const useDispatch = createDispatchHook(WorkspaceContext);
export const useSelector = createSelectorHook(WorkspaceContext);
