"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">Error</h1>
        <p className="mb-4 text-gray-600">Sorry, something went wrong.</p>
        <button
          onClick={() => router.push("/login")}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
}
