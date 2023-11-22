import z from "zod";

interface MainRegion {
  name: string;
  url: string;
}

interface Generation {
  main_region: MainRegion;
}

const GenerationSchema: z.ZodType<Generation> = z.object({
  main_region: z.object({ name: z.string(), url: z.string() }),
});

const useGeneration = async (name: string): Promise<Generation> => {
  const raw_data = await fetch(`https://pokeapi.co/api/v2/generation/${name}`, { next: { revalidate: 3600 } });
  const data = await raw_data.json();
  return GenerationSchema.parse(data);
};

export default useGeneration;
