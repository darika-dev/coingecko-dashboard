import axios from 'axios';

export const CoinGeckoClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});
