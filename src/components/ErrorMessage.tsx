interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <p className="border-2 text-rose-500 border-rose-500 rounded p-4">
      <strong>{error}</strong>
    </p>
  );
};

export { ErrorMessage };
