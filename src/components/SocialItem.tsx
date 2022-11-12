interface SocialItemProps {
  item: any;
}
const SocialItem = ({ item }: SocialItemProps) => {
  return (
    <>
      {item.url && (
        <li>
          <span className="font-bold text-gray-700">
            {item.label}:{' '}
            <a
              href={item.url}
              target="_blank"
              className="font-bold text-sm inline-block mt-1"
              rel="noreferrer"
            >
              {item.url}
            </a>
          </span>
        </li>
      )}
    </>
  );
};

export { SocialItem };
