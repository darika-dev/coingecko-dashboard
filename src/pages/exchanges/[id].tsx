import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Main
      meta={
        <Meta
          title="Crypto Exchanges Dashboard"
          description="Crypto Exchange"
        />
      }
    >
      <h2 className="text-2xl font-bold">Details Page {id}</h2>
      <div>
        name, country, trust rank, logo, year of establishment, social media
        links, description
      </div>
      <div className="mt-4">
        <Link href="/" className="font-bold block mb-2 text-lg">
          ← Go Back
        </Link>
      </div>
    </Main>
  );
};

export default Details;
