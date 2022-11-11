import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

const Navbar = () => {
  return (
    <header className="py-5 border-b border-gray-300">
      <div className="container">
        <h1 className="">
          <Link
            href="/"
            className="border-none text-gray-900 hover:text-gray-700"
          >
            {AppConfig.title}
          </Link>
        </h1>
      </div>
    </header>
  );
};

export { Navbar };
