import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../../style";

const colors = [
 {colorName:'Base03',hexCode:'#002b36'},
{colorName:'Base02',hexCode:'#073642'},
{colorName:'Base01',hexCode:'#586e75'},
{colorName:'Base00',hexCode:'#657b83'},
{colorName:'Base0',hexCode:'#839496'},
{colorName:'Base1',hexCode:'#93a1a1'},
{colorName:'Base2',hexCode:'#eee8d5'},
{colorName:'Base3',hexCode:'#fdf6e3'},
{colorName:'Yellow',hexCode:'#b58900'},
{colorName:'Orange',hexCode:'#cb4b16'},
{colorName:'Red',hexCode:'#dc322f'},
{colorName:'Magenta',hexCode:'#d33682'},
{colorName:'Cyan',hexCode:'#2aa198'},
{colorName:'Green',hexCode:'#859900'},
];

export class Box extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={<Text>No Data .......</Text>}
          ListHeaderComponent={
            <Text style={styles.title}>
              Here are some boxes of different colours
            </Text>
          }
          data={colors}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <View style={[styles.colorBox, { backgroundColor: item.hexCode }]}>
              <Text style={styles.boxText}>{item.colorName} {item.hexCode}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Box;
