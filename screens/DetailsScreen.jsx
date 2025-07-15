import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.picture.large }} style={styles.image} />
      <Text style={styles.name}>
        {item.name.first} {item.name.last}
      </Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>City: {item.location.city}</Text>
      <Text>Country: {item.location.country}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
