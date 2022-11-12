const ExchangeList = ({ items }) => {
  console.log('items', items);
  return (
    <ul className="flex">
      {items.map((exchange) => (
        <li className="w-full" key={exchange.id}>
          {exchange.id} | {exchange.name}
        </li>
      ))}
    </ul>
  );
};

export { ExchangeList };
