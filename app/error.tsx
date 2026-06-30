'use client';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold text-red-500 mb-2">
        Something went wrong!
      </h2>
      <p className="text-gray-500 mb-4">{error.message}</p>

      <div className="flex justify-center gap-4">
    
        <button
          onClick={reset}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Try Again
        </button>

     
        <Link
          href="/"
          className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}