import z from "zod";

interface GenerationDescription {
  name: string;
  url: string;
}

interface Generations {
  results: Array<GenerationDescription>;
}

const GenerationDescriptionSchema: z.ZodType<GenerationDescription> = z.object({ name: z.string(), url: z.string() });

const GenerationsSchema: z.ZodType<Generations> = z.object({
  results: z.array(GenerationDescriptionSchema),
});

const useGenerations = async (): Promise<Array<GenerationDescription>> => {
  const raw_data = await fetch("https://pokeapi.co/api/v2/generation/", { next: { revalidate: 3600 } });
  const data = await raw_data.json();
  return GenerationsSchema.parse(data).results;
};

export default useGenerations;
