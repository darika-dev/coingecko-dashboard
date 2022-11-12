import Link from 'next/link';

import type { Exchange } from '@/interfaces/exchanges.interface';

interface ExchangeItemProps {
  exchange: Exchange;
}
const ExchangeItem = ({ exchange }: ExchangeItemProps) => {
  return (
    <li className="flex flex-col justify-between text-center relative w-full shadow-md rounded-md border p-4">
      <Link href={`/exchanges/${exchange.id}`} className="block mb-2">
        <img
          src={exchange.image}
          alt={exchange.name}
          className="block m-auto w-12 h-12 mb-2"
        />
        <strong>{exchange.name}</strong>
      </Link>
      <div className="my-2">
        {exchange.country && (
          <p>
            <strong>{exchange.country}</strong>
          </p>
        )}
        <p>
          <span className="text-gray-700 text-sm">trust scope:</span>{' '}
          <strong>{exchange.trust_score}</strong>
        </p>
      </div>
      <a
        href={exchange.url}
        target="_blank"
        className="font-bold text-sm inline-block mt-1"
        rel="noreferrer"
      >
        website ↗
      </a>
    </li>
  );
};

export { ExchangeItem };
