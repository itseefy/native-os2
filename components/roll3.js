import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, Dimensions, Animated, PanResponder } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import RollButton from "./RollButton";

export default function roll({ navigation }) {

    const position = useRef(new Animated.ValueXY()).current;
    const isFocused = useIsFocused();

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([
            null,
            { dx: position.x, dy: position.y },
        ]),
        onPanResponderGrant: () => {
            position.setOffset({
                x: position.x._value,
                y: position.y._value,
            });
        },
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },
            }).start();
        },
    });

    useEffect(() => {
        return () => position.setValue({ x: 0, y: 0 });
    }, [isFocused]);

//dice roll
const diceImages = [
    require("../assets/dice-images/dice-one.png"),
    require("../assets/dice-images/dice-two.png"),
    require("../assets/dice-images/dice-three.png"),
    require("../assets/dice-images/dice-four.png"),
    require("../assets/dice-images/dice-five.png"),
    require("../assets/dice-images/dice-six.png"),
];

const dice = [diceImages[0], diceImages[1], diceImages[2], diceImages[3], diceImages[4], diceImages[5]]

function setDice(number) {
    if (number === 1) {
        return dice[0];
    } else if (number === 2) {
        return dice[1];
    }
    else if (number === 3) {
        return dice[2];
    }
    else if (number === 4) {
        return dice[3];
    }
    else if (number === 5) {
        return dice[4];
    }
    else if (number === 6) {
        return dice[5];
    }
}

//for the dice
const [roll, setRoll] = useState(0);

const diceRoll = () => {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    setRoll(diceResult);
};


useEffect(() => {
    if (roll === 1) {
        setDice(1);
    }
    else if (roll === 2) {
        setDice(2);
    }
    else if (roll === 3) {
        setDice(3);
    }
    else if (roll === 4) {
        setDice(4);
    }
    else if (roll === 5) {
        setDice(5);
    }
    else if (roll === 6) {
        setDice(6);
    }
}, [roll]);

return (

    <View style={styles.mainContainer}>
        <View style={styles.resultContainer}>
            <Text style={[styles.text]}>Your Roll: {roll}</Text>
        </View>
        <Animated.View
            style={[position.getLayout()]}
            {...panResponder.panHandlers}
        >
            {/* dice area */}
            <View style={styles.diceContainer}>
                <Image style={styles.diceStyle} source={setDice(roll)} />
            </View>
        </Animated.View>
        {/* container for the button */}
        <View style={styles.buttonContainer}>
            <RollButton diceRoll={diceRoll} />
        </View>
    </View>
);
}

//styling 
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    resultContainer: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diceContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold",
    },
    diceStyle: {
        width: Dimensions.get("window").width - 125,
        height: Dimensions.get('window').height - 125,
        resizeMode: "contain",
    }
});
