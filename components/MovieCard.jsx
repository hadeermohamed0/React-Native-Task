import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFavorite } from "../context/FavoriteContext";
import { FontAwesome } from "@expo/vector-icons";

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useFavorite();
  const isFav = favorites.some((fav) => fav.id === movie.id);

  return (
    <View
      style={{
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/50x75",
        }}
        style={{ width: 50, height: 75, marginRight: 10 }}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text>{movie.title}</Text>
        <Text style={{ color: "gray" }}>{movie.release_date}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(movie)}>
        <FontAwesome name="heart" size={24} color={isFav ? "red" : "grey"} />
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
