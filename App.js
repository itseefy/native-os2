import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button} from 'react-native'

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//grabs dimensions of screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

import roll from "./components/roll";
import AppTitle from "./components/AppTitle"

const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: 'green',
    background: 'white',
    card: 'black',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Roll"
          component={roll}
          options={{
            headerTitle: () => <AppTitle/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
