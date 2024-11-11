/* eslint-disable react/prop-types */
import { Info } from 'lucide-react';

const CharacterDetails = ({ character }) => {
  if (!character) {
    return (
      <div className="flex items-center justify-center h-full p-8 text-center">
        <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
          <Info className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg text-gray-400">Select a character to view their details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-400">
          {character.name}
        </h2>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Physical Traits Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-400">
            <span className="w-1 h-6 bg-yellow-400 rounded-full"/>
            Physical Traits
          </h3>
          <div className="grid grid-cols-2 gap-4 pl-4">
            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium text-gray-400">{character.height}cm</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mass</p>
              <p className="font-medium text-gray-400">{character.mass}kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium text-gray-400">{character.gender}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Background Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-400">
            <span className="w-1 h-6 bg-yellow-400 rounded-full"/>
            Background
          </h3>
          <div className="grid grid-cols-2 gap-4 pl-4">
            <div>
              <p className="text-sm text-gray-500">Birth Year</p>
              <p className="font-medium text-gray-400">{character.birth_year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Homeworld</p>
              <p className="font-medium text-gray-400">{character.homeworld}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Films Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-400">
            <span className="w-1 h-6 bg-yellow-400 rounded-full"/>
            Film Appearances
          </h3>
          <div className="max-h-48 overflow-y-auto pl-4">
            <ul className="space-y-2">
              {character.films.map((film, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"/>
                  <span className="text-gray-400">{film}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
