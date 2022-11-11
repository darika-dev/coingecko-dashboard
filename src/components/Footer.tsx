import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-5">
      <div className="container">
        <p className="text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
