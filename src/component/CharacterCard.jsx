/* eslint-disable react/prop-types */
const CharacterCard = ({ character, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(character)}
      className={`w-full text-left p-3 rounded-lg transition-colors duration-200
                ${isSelected 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-gray-700 hover:bg-gray-600'}`}
    >
      <div className="font-bold">{character.name}</div>
      <div className="text-sm opacity-75">Born: {character.birth_year}</div>
      <div className="text-sm opacity-75">From: {character.homeworld}</div>
    </button>
  );
};

export default CharacterCard;