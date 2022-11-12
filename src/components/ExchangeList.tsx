import { ExchangeItem } from '@/components/ExchangeItem';

import type { Exchange } from '../interfaces/exchanges.interface';

interface ExchangeListProps {
  exchanges: Exchange[];
}

const ExchangeList = ({ exchanges }: ExchangeListProps) => {
  console.log('items', exchanges);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
      {exchanges &&
        exchanges.map((exchange) => (
          <ExchangeItem exchange={exchange} key={exchange.id} />
        ))}
    </ul>
  );
};

export { ExchangeList };
