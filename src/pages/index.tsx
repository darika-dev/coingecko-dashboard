import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Crypto Exchanges Dashboard"
          description="Crypto Exchange Directory utilizing Typescript, Next js (React), Tailwind CSS and Coingecko API, tested using Cypress and Jest."
        />
      }
    >
      <h1 className="text-2xl font-bold">
        Crypto Exchanges Dashboard
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.</p>
    </Main>
  );
};

export default Index;
