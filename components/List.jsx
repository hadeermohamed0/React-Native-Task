import React, { Component } from "react";
import { Text, View, SectionList, StyleSheet, Image } from "react-native";
import styles from "../../style";

const DATA = [
  {
    title: "A",
    data: [
      {
        name: "User 1",
        image:
          "https://i.pinimg.com/736x/6f/51/83/6f5183832cf98eb9839646ac264f4efc.jpg",
      },
      {
        name: "User 2",
        image:
          "https://i.pinimg.com/736x/f2/d7/14/f2d7143d761362441b903285730e53f6.jpg",
      },
      {
        name: "User 3",
        image:
          "https://i.pinimg.com/736x/8b/41/40/8b414093db47cab0bcd259104ddef460.jpg",
      },
    ],
  },
  {
    title: "B",
    data: [
      {
        name: "User 1",
        image:
          "https://i.pinimg.com/736x/32/fa/81/32fa811dbe7cf03a712ee0367bd624e9.jpg",
      },
      {
        name: "User 2",
        image:
          "https://i.pinimg.com/736x/ec/67/ef/ec67efbf2b1fdc83431e4d00d894620f.jpg",
      },
    ],
  },
  {
    title: "C",
    data: [
      {
        name: "User 1",
        image:
          "https://i.pinimg.com/736x/75/d2/0f/75d20fc741f6530e26028de45abc3533.jpg",
      },
    ],
  },
  {
    title: "D",
    data: [
      {
        name: "User 1",
        image:
          "https://i.pinimg.com/736x/9d/7a/97/9d7a97e40784fe6a73c9cb4145ad0636.jpg",
      },
    ],
  },
];

export class ListTask extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}


export default ListTask;
