import { Character } from '@/app/types';
import Image from 'next/image';
import React from 'react';
import './charactersList.css'; // Import your CSS file for styling

const CharactersList = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      {characters ? (
        <div className="character-list">
          {characters.map((item: any) => {
            return (
              <div key={item.id} className="character-item">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default CharactersList;
