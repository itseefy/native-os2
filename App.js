import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* header  */}
      <View style={styles.topContainer}>
        <Text>'yeehaw'</Text>

      </View>

      {/* main roll area */}
      <View style={styles.middleContainer}>


      </View>
      <Text>Sup homie wuzgood
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    backgroundColor: 'red',
    flex: 1,
  }
});
