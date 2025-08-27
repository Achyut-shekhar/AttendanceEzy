"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to AttendanceEzy.
      </h1>

      <div className="flex space-x-4">
        <Link
          href="/pages/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>

        <Link
          href="/pages/signup"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Signup
        </Link>

        <Link
          href="/pages/dashboard"
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
