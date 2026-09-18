interface ErrorStateProps {
  title?: string;

  message: string;

  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
      <h3 className="font-semibold text-[#C94A4A]">
        {title}
      </h3>

      <p className="mt-1 text-sm text-[#7D3A3A]">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="
            mt-3
            text-sm
            font-semibold
            text-[#C94A4A]
            underline
          "
        >
          Try again
        </button>
      )}
    </div>
  );
}