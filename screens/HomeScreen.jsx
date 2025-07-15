import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import MovieCard from "../components/MovieCard";
import { fetchMovies, searchMovies, fetchGenres } from "../data/api2";
import { Picker } from "@react-native-picker/picker";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const loadInitialMovies = async () => {
    setLoading(true);
    const results = await fetchMovies();
    setMovies(results);
    setLoading(false);
  };

  const loadGenres = async () => {
    const result = await fetchGenres();
    setGenres(result);
  };

  const handleSearch = async (query) => {
    setSearch(query);
    if (query.length === 0) {
      loadInitialMovies();
      return;
    }

    setLoading(true);
    const results = await searchMovies(query);
    const filtered =
      selectedGenre !== ""
        ? results.filter((movie) =>
            movie.genre_ids.includes(Number(selectedGenre))
          )
        : results;
    setMovies(filtered);
    setLoading(false);
  };

  const handleFilter = (genreId) => {
    setSelectedGenre(genreId);
    handleSearch(search);
  };

  useEffect(() => {
    loadInitialMovies();
    loadGenres();
  }, []);

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <TextInput
          placeholder="Search Movies..."
          value={search}
          onChangeText={handleSearch}
          style={{
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 5,
          }}
        />
        <Picker
          selectedValue={selectedGenre}
          style={{ width: 150 }}
          onValueChange={(itemValue) => handleFilter(itemValue)}
        >
          <Picker.Item label="All" value="" />
          {genres.map((genre) => (
            <Picker.Item
              key={genre.id}
              label={genre.name}
              value={genre.id.toString()}
            />
          ))}
        </Picker>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
