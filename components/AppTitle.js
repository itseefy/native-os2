import React from "react";
import { Text, StyleSheet } from 'react-native';

export default function LogoTitle() {
  return (
    <Text style={styles.titleText}>Roll 1d6</Text>
  );
}

const styles = StyleSheet.create({
    titleText: {
        color: 'white',
        fontSize: 36,
        fontWeight: "800",
        textAlign: "center",
    }
  });