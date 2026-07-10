export default function Loading() {
  return (
    <div className="flex min-h-[65svh] items-center justify-center">
      <div className="relative h-24 w-24" role="status" aria-label="Loading page">
        <span className="absolute inset-0 animate-spin rounded-full border border-border border-t-primary" />
        <span className="absolute inset-5 animate-[spin_1.4s_linear_infinite_reverse] rounded-full border border-border border-t-secondary" />
        <span className="absolute inset-[2.35rem] rounded-full bg-primary animate-pulse" />
      </div>
    </div>
  );
}
