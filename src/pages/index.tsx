import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ExchangeList } from '@/components/ExchangeList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { CoinGeckoClient } from '../api';
import {
  selectExchangesError,
  selectExchangesLoading,
  selectExchangesState,
  setExchangesError,
  setExchangesLoading,
  setExchangesState,
} from '../store/exchangesSlice';

const Index: NextPage = () => {
  const exchangesState = useSelector(selectExchangesState);
  const exchangesError = useSelector(selectExchangesError);
  const exchangesLoading = useSelector(selectExchangesLoading);
  const dispatch = useDispatch();

  async function fetchExchanges() {
    dispatch(setExchangesLoading(true));
    try {
      const { data } = await CoinGeckoClient.get('/exchanges?per_page=10');
      dispatch(setExchangesState(data));
      dispatch(setExchangesLoading(false));
    } catch (e) {
      dispatch(setExchangesError(e.message));
      dispatch(setExchangesLoading(false));
    }
  }

  useEffect(() => {
    if (!exchangesState.length) {
      fetchExchanges();
    }
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Crypto Exchanges Dashboard"
          description="Crypto Exchange Directory utilizing Typescript, Next js (React), Tailwind CSS and Coingecko API, tested using Cypress and Jest."
        />
      }
    >
      <h2 className="text-2xl font-bold">Top 10 Exchanges</h2>
      <div className="mt-6">
        {exchangesLoading && (
          <p className="text-gray-600">
            <strong>Loading</strong>
          </p>
        )}
        {exchangesError && (
          <p className="text-red-500">
            <strong>{exchangesError}</strong>
          </p>
        )}
        {!exchangesLoading && !exchangesError && exchangesState.length && (
          <ExchangeList exchanges={exchangesState} />
        )}
      </div>
    </Main>
  );
};

export default Index;
