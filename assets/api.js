export const api = {
  getCharacters: async (expectedPage) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${expectedPage}`);
    const data = await res.json();
    return await data.results;
  }
};
