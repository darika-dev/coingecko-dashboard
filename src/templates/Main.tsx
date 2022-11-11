import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex flex-col justify-between w-full min-h-screen antialiased">
    {props.meta}
    <div>
      <Navbar />

      <div className="container py-8">{props.children}</div>
    </div>

    <Footer />
  </div>
);

export { Main };
