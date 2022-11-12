import { SocialItem } from '@/components/SocialItem';

interface SocialListProps {
  items: any;
}
const SocialList = ({ items }: SocialListProps) => {
  return (
    <ul>
      {items.map((item, key) => (
        <SocialItem item={item} key={key + item.url} />
      ))}
    </ul>
  );
};

export { SocialList };
