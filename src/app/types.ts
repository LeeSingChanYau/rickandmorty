export interface Character {
  name: string;
  image: string;
  id: string;
}

export interface Result {
  characters: Character[];
  pages: number;
}
