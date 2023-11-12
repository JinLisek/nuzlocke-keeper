"use client";

import axios from "axios";
import useGenerations from "./useGenerations";

const Home = () => {
  const { generations, isLoading, error } = useGenerations();

  if (error) return <div>Failed to load, error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {generations.results.map((generation) => (
          <li key={generation.name}>{generation.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
