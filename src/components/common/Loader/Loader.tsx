export function Loader() {
  return (
    <div
      className="flex items-center justify-center py-10"
      aria-label="Loading"
    >
      <div
        className="
          h-7
          w-7
          animate-spin
          rounded-full
          border-2
          border-[#D4A843]
          border-t-transparent
        "
      />
    </div>
  );
}