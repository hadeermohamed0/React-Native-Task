import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useFavorite } from "../context/FavoriteContext";
import MovieCard from "../components/MovieCard";

const FavoritesScreen = () => {
  const { favorites, toggleFavorite } = useFavorite();

  return (
    <View style={{ padding: 10, flex: 1 ,backgroundColor:"black" }}>
      {favorites.length === 0 ? (
        <Text style={{color:"white"}}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <MovieCard movie={item} />
              <TouchableOpacity
                onPress={() => toggleFavorite(item)}
                style={{
                  backgroundColor: "#f55",
                  padding: 6,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Remove from Favorites
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
