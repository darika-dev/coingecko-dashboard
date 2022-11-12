import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { currentExchangeSlice } from './currentExchangeSlice';
import { exchangesSlice } from './exchangesSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [exchangesSlice.name]: exchangesSlice.reducer,
      [currentExchangeSlice.name]: currentExchangeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
