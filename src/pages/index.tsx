import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CoinGeckoClient } from '@/api';
import { ErrorMessage } from '@/components/ErrorMessage';
import { ExchangeList } from '@/components/ExchangeList';
import { Loader } from '@/components/Loader';
import { Meta } from '@/layouts/Meta';
import {
  selectExchangesError,
  selectExchangesLoading,
  selectExchangesState,
  setExchangesError,
  setExchangesLoading,
  setExchangesState,
} from '@/store/exchangesSlice';
import { Main } from '@/templates/Main';

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
      dispatch(setExchangesError(false));
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
        {exchangesLoading && <Loader />}
        {exchangesError && <ErrorMessage error={exchangesError} />}
        {!exchangesLoading && !exchangesError && exchangesState.length && (
          <ExchangeList exchanges={exchangesState} />
        )}
      </div>
    </Main>
  );
};

export default Index;
