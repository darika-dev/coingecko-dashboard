import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';

import type { ExchangeRootState } from '@/interfaces/exchanges.interface';

import type { AppState } from './store';

// Initial state
const initialState: ExchangeRootState = {
  exchange: null,
  isLoading: false,
  isError: false,
};

// Actual Slice
export const currentExchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    // Actions
    setExchangeState(state, action: AnyAction) {
      state.exchange = action.payload;
    },
    setExchangeLoading(state, action: AnyAction) {
      state.isLoading = action.payload;
    },
    setExchangeError(state, action: AnyAction) {
      state.isError = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.exchange,
        };
      },
    },
  },
});

export const { setExchangeState, setExchangeLoading, setExchangeError } =
  currentExchangeSlice.actions;

export const selectExchangeState = (state: AppState) => state.exchange.exchange;
export const selectExchangeError = (state: AppState) => state.exchange.isError;
export const selectExchangeLoading = (state: AppState) =>
  state.exchange.isLoading;

export default currentExchangeSlice.reducer;
