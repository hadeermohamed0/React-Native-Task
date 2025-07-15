import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import fetchData from "../data/api";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
      setFiltered(result);
    };
    getData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.first.toLowerCase().startsWith(search.toLowerCase())
    );

    setFiltered(filteredData);
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <View>
              <Text style={styles.title}>
                {item.name.first} {item.name.last}
                
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
card: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: 16,
  marginVertical: 8,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#ddd",
  elevation: 4,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  gap: 12,
},

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: { fontSize: 16, fontWeight: "bold" },
});
