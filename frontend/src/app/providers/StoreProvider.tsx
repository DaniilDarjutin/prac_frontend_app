import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/rootReducer';
import React from 'react';

const store = configureStore({ reducer: rootReducer });

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);