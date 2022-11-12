import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';

import type { ExchangesRootState } from '@/interfaces/exchanges.interface';

import type { AppState } from './store';

// Initial state
const initialState: ExchangesRootState = {
  exchanges: [],
  isLoading: false,
  isError: false,
};

// Actual Slice
export const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {
    // Actions
    setExchangesState(state, action: AnyAction) {
      state.exchanges = action.payload;
    },
    setExchangesLoading(state, action: AnyAction) {
      state.isLoading = action.payload;
    },
    setExchangesError(state, action: AnyAction) {
      state.isError = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.exchanges,
        };
      },
    },
  },
});

export const { setExchangesState, setExchangesLoading, setExchangesError } =
  exchangesSlice.actions;

export const selectExchangesState = (state: AppState) =>
  state.exchanges.exchanges;
export const selectExchangesError = (state: AppState) =>
  state.exchanges.isError;
export const selectExchangesLoading = (state: AppState) =>
  state.exchanges.isLoading;

export default exchangesSlice.reducer;
