import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  function HomeScreen2() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={HomeScreen2} name="Home2" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    color: "red",
  },
});
