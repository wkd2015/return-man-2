"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-4 text-zinc-100">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="max-w-sm text-center text-sm text-zinc-400">
          A critical error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500"
        >
          Try again
        </button>
        <a
          href="/en"
          className="text-sm text-amber-400 underline-offset-4 hover:underline"
        >
          Back to game
        </a>
      </body>
    </html>
  );
}
