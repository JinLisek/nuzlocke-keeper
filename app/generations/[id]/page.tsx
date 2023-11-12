"use client";

import Link from "next/link";

const Generation = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={{ pathname: "/" }}>Home</Link>
    </main>
  );
};

export default Generation;
