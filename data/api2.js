const API_KEY = "c76bb8c0cb06393424920f2c75351bfd";

export const fetchMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
  );
  const data = await res.json();
  return data.results || [];
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  const data = await res.json();
  return data.results || [];
};

export const fetchGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data.genres || [];
};
