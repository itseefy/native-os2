import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button} from 'react-native'

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Fontisto, EvilIcons } from "@expo/vector-icons";

//grabs dimensions of screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

//import components/screens
import roll from "./components/roll";
import AppTitle from "./components/AppTitle"
import Welcome from "./components/Welcome"
import roll2 from "./components/roll2"
import roll3 from "./components/roll3"


const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

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

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="FadeIn"
        component={roll}
        options={{
          title: "Fade Roller",
          tabBarIcon: ({ focused }) => (
            <AntDesign name="rocket1" size={24} color={focused ? "#141414" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Dice Rotate"
        component={roll2}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="spinner-rotate-forward" size={24} color={focused ? "#141414" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Drag Dice"
        component={roll3}
        options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name="pointer" size={24} color={focused ? "#141414" : "gray"} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator theme={MyTheme}>
      <Drawer.Screen name="Welcome" component={Welcome} options={{headerTitle: () => <AppTitle/>}} />
      <Drawer.Screen name="Roller" component={RootTabNavigator} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
  );
};
