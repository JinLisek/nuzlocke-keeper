import useGeneration from "@/app/useGeneration";
import Link from "next/link";

const Generation = async ({ params }: { params: { id: string } }) => {
  const generation = await useGeneration(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={{ pathname: "/" }}>Home</Link>
      <p>{generation.main_region.name}</p>
    </main>
  );
};

export default Generation;
