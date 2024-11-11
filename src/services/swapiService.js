const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchCharacters = async (page = 1) => {
  const response = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return response.json();
};

export const fetchPlanet = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch planet');
  }
  return response.json();
};

export const fetchFilms = async (urls) => {
  try {
    const filmPromises = urls.map(url => 
      fetch(url)
        .then(res => res.json())
        .then(film => film.title)
    );
    return Promise.all(filmPromises);
  } catch (error) {
    throw new Error('Failed to fetch films: ', error);
  }
};

export const enrichCharacterData = async (character) => {
  try {
    // Fetch homeworld name
    const homeworld = await fetchPlanet(character.homeworld);
    // Fetch film titles
    const films = await fetchFilms(character.films);

    return {
      ...character,
      homeworld: homeworld.name,
      films: films,
      // Convert height and mass to numbers, handle 'unknown' values
      height: character.height !== 'unknown' ? Number(character.height) : 'unknown',
      mass: character.mass !== 'unknown' ? Number(character.mass) : 'unknown'
    };
  } catch (error) {
    console.error('Error enriching character data:', error);
    return character;
  }
};