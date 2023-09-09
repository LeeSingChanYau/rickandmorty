import { getData } from './api/getData';
import CharactersList from './components/charactersList/charactersList';
import Pagination from './components/pagination/pagination';

export default async function Home() {
  const res = await getData('1');
  const totalPages = res.pages;
  const characters = res.characters;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharactersList characters={characters} />
      <Pagination
        currentPage={1}
        totalPages={totalPages}
        characters={characters}
      />
    </main>
  );
}
