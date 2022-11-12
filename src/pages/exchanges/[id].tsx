import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CoinGeckoClient } from '@/api';
import { ErrorMessage } from '@/components/ErrorMessage';
import { ExchangeInfo } from '@/components/ExchangeInfo';
import { Loader } from '@/components/Loader';
import { Meta } from '@/layouts/Meta';
import {
  selectExchangeError,
  selectExchangeLoading,
  selectExchangeState,
  setExchangeError,
  setExchangeLoading,
  setExchangeState,
} from '@/store/currentExchangeSlice';
import { Main } from '@/templates/Main';

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const exchangeState = useSelector(selectExchangeState);
  const exchangeError = useSelector(selectExchangeError);
  const exchangeLoading = useSelector(selectExchangeLoading);
  const dispatch = useDispatch();

  async function fetchCurrentExchange() {
    dispatch(setExchangeLoading(true));
    try {
      const { data } = await CoinGeckoClient.get(`/exchanges/${id}`);
      dispatch(setExchangeState({ id, ...data }));
      dispatch(setExchangeLoading(false));
      dispatch(setExchangeError(false));
    } catch (e) {
      dispatch(setExchangeError(e.message));
      dispatch(setExchangeLoading(false));
    }
  }

  useEffect(() => {
    if (!router.isReady) return;
    if (exchangeState && id === exchangeState.id) return;
    fetchCurrentExchange();
  }, [router.isReady]);

  return (
    <Main
      meta={
        <Meta
          title="Crypto Exchanges Dashboard"
          description="Crypto Exchange"
        />
      }
    >
      {exchangeLoading && <Loader />}
      {!exchangeLoading && !exchangeError && exchangeState && (
        <ExchangeInfo exchange={exchangeState} />
      )}
      {exchangeError}
      {exchangeError && <ErrorMessage error={exchangeError} />}
      <div className="mt-4">
        <Link href="/" className="font-bold block mb-2 text-lg">
          ← Go Back
        </Link>
      </div>
    </Main>
  );
};

export default Details;
