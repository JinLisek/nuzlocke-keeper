"use client";

import axios from "axios";
import useSWRImmutable from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface GenerationDescription {
  name: string;
  url: string;
}

interface GenerationsData {
  results: Array<GenerationDescription>;
}

interface Generations {
  generations: GenerationsData;
  isLoading: boolean;
  error: string;
}

const useGenerations = (): Generations => {
  const { data, error, isLoading } = useSWRImmutable("https://pokeapi.co/api/v2/generation/", fetcher);
  return {
    generations: data,
    isLoading,
    error,
  };
};

export default useGenerations;
