import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function rollButton(props) {
  return (
    <TouchableOpacity
      style={styles.counterBtn}
      onPress={props.diceRoll}
    >
      <Text style={styles.counterBtnText}>ROLL</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  counterBtn: {
    marginTop: 10,
    backgroundColor: '#c745ff',
    padding: 20,
  },
  counterBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
});