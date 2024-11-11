/* eslint-disable react/prop-types */
import CharacterCard from './CharacterCard';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';

const CharacterList = ({ 
  characters, 
  loading, 
  selectedCharacter,
  onSelectCharacter,
  currentPage,
  totalPages,
  onPageChange 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 h-[600px] flex flex-col">
      <h2 className="text-xl font-bold mb-4">Characters</h2>
      
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-2">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard
                key={char.name}
                character={char}
                isSelected={selectedCharacter?.name === char.name}
                onClick={onSelectCharacter}
              />
            ))
          ) : (
            <div className="text-center text-gray-400 mt-4">
              No characters found
            </div>
          )}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CharacterList;