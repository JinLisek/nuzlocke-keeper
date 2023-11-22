import Link from "next/link";
import useGenerations from "./useGenerations";

const Home = async () => {
  const generations = await useGenerations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {generations.map((generation) => (
          <li key={generation.name}>
            <Link href={{ pathname: `/generations/${generation.name}` }}>{generation.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
