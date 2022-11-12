import { SocialList } from '@/components/SocialList';
import type { Exchange } from '@/interfaces/exchanges.interface';

interface ExchangeInfoProps {
  exchange: Exchange;
}
const ExchangeInfo = ({ exchange }: ExchangeInfoProps) => {
  return (
    <div>
      <div className="flex mb-4 items-center">
        <img
          src={exchange.image}
          alt={exchange.name}
          className="shrink-0 w-24 h-24 block mr-4"
        />
        <div>
          <h2 className="text-3xl font-bold">
            {exchange?.name || 'Details Page'}
          </h2>
          <p>
            <span className="text-gray-700 text-sm font-bold">
              Trust scope:
            </span>{' '}
            <strong>{exchange.trust_score}</strong>
          </p>
          <p className="text-gray-700 text-sm">
            {exchange.country && `${exchange.country}, `}
            {exchange.year_established}
          </p>
        </div>
      </div>
      {exchange.description && <p className="mt-4">{exchange.description}</p>}

      <div className="mt-4">
        <SocialList
          items={[
            { label: 'Website', url: exchange.url },
            { label: 'Facebook', url: exchange.facebook_url },
            { label: 'Reddit', url: exchange.reddit_url },
            { label: 'Telegram', url: exchange.telegram_url },
            { label: 'Slack', url: exchange.slack_url },
            {
              label: 'Other',
              url: exchange.other_url_1,
            },
            {
              label: 'Other',
              url: exchange.other_url_2,
            },
          ]}
        />
      </div>
    </div>
  );
};

export { ExchangeInfo };
