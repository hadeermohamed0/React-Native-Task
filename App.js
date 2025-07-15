import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StaticStack from "./navigation/staticStack";
import AppNavigator from "./navigation/AppNavigator";
import { FavoriteProvider } from "./context/FavoriteContext";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator2 from "./navigation/AppNavigator2";

const App = () => {
  return (
    <>
      {/* <Box></Box> */}

      {/* <ListTask></ListTask> */}

      {/* <ToDo></ToDo> */}
      {/* <StaticStack></StaticStack> */}
      {/* <AppNavigator /> */}

      <FavoriteProvider>
        <NavigationContainer>
          <AppNavigator2 />
        </NavigationContainer>
      </FavoriteProvider>
    </>
  );
};

export default App;
