import { useState, useEffect } from 'react';
import SearchBar from '../component/SearchBar';
import CharacterList from '../component/CharacterList';
import CharacterDetails from '../component/CharacterDetails';
import { fetchCharacters, enrichCharacterData } from '../services/swapiService';
import './StarWarsScreen.css';

const StarWarsScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch basic character data
        const data = await fetchCharacters(currentPage);
        setTotalPages(Math.ceil(data.count / 10));

        // Enrich each character with additional data
        const enrichedCharacters = await Promise.all(
          data.results.map(enrichCharacterData)
        );

        setCharacters(enrichedCharacters);
        setFilteredCharacters(enrichedCharacters);
      } catch (err) {
        setError('Failed to load characters. Please try again later.');
        console.error('Error loading characters:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage]);

  // Handle search
  useEffect(() => {
    const filtered = characters.filter(char =>
      char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchQuery, characters]);

  // Event handlers
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setSelectedCharacter(null);
    }
  };

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  if (error) {
    return (
      <div className="min-h-screen star-wars-background text-gray-100">
        <header className="bg-gray-800 p-4 shadow-lg">
          <h1 className="text-3xl font-bold text-center text-yellow-400">
            Star Wars Explorer
          </h1>
        </header>
        <div className="container mx-auto p-4">
          <div className="bg-red-500 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold">Error</h2>
            <p>{error}</p>
            <button 
              onClick={() => setCurrentPage(currentPage)} 
              className="mt-4 px-4 py-2 bg-white text-red-500 rounded hover:bg-gray-100"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen star-wars-background text-gray-100">
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-400">
          Star Wars Explorer
        </h1>
      </header>

      <main className="container mx-auto p-4">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <div className="grid md:grid-cols-[1fr,2fr] gap-6">
          <CharacterList
            characters={filteredCharacters}
            loading={loading}
            selectedCharacter={selectedCharacter}
            onSelectCharacter={handleSelectCharacter}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          <div className="rounded-lg">
            <CharacterDetails character={selectedCharacter} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StarWarsScreen;
