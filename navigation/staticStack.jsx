import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Home from "../screens/home";
import About from "../screens/about";
import User from "../screens/user";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

const mystack = createNativeStackNavigator({
  screens: {
    home: Home,
    about: About,
    user: User,
  },
});

const Navigation = createStaticNavigation(mystack);

const StaticStack = () => {
  return <Navigation></Navigation>;
};

export default StaticStack;

const styles = StyleSheet.create({});
