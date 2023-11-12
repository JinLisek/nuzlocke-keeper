"use client";

import Link from "next/link";
import useGenerations from "./useGenerations";

const Home = () => {
  const { generations, isLoading, error } = useGenerations();

  if (error) return <div>Failed to load, error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {generations.results.map((generation, idx) => (
          <li key={generation.name}>
            <Link href={{ pathname: `/generations/${idx}` }}>{generation.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
