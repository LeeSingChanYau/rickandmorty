import { Result } from '../types';

export const getData = async (pageNumber: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${
      pageNumber ? pageNumber : 1
    }`
  );
  if (!response.ok) {
    throw new Error('Request failed');
  }
  const data = await response.json();
  const result: Result = { pages: data.info.pages, characters: data.results };
  return result;
};

export const generateArraySizeN: (n: number) => number[] = (n: number) => {
  let array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }
  return array;
};
