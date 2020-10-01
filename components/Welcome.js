import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Welcome to the Dice Roller app!</Text>
      <Text style={styles.text}>Use the side menu to navigate to the roller.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  textTitle: {
    color: "#c745ff",
    fontSize: 20,
    fontWeight: "700",
  },
});