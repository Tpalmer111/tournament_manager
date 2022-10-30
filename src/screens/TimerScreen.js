import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
// import CountDown from 'react-native-countdown-component';

const c = console.log.bind(document)


export default function ({ navigation }) {
    const { isDarkmode } = useTheme();
    // const [timer, setTimer] = useState(0)
    let smallBlind = 25;
    let bigBlind = 50;
    let level = 1;
    let isRunning = false
    // let displayTime = 0
    let minutes = 0;
    let seconds = 0;
    let time = (5 * 1)
    
    let interval

    // useEffect(() => {
    //     const timerStartInterval = setInterval(() => {
    //         setTimer((time) => time - 1);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timerStartInterval);
    //     }
    // }, []);
  

    const timerSwitch = () => {
        isRunning = !isRunning
        if (isRunning) {
            // timer function
            interval = setInterval(callback, 1000);
            c(isRunning)
            // c(`minutes: ${minutes} and seconds: ${seconds}`)
        } else if (!isRunning) {
            clearInterval(interval)
            c(isRunning)
        }
    }

    function callback() {
        time--
        minutes = Math.floor(time / 60)
        seconds = Math.floor(time % 60)
        c(`${minutes}:${seconds}`)
        if (minutes === 0 && seconds === 0) {
            blindLevel()
            c(level)
        } else {
            return
        }
    }
    
    const blindLevel = () => {
        // variables to track go here
        // call a function to restart clock
        // plus one to the level
        level = level + 1
        // multiply the blinds by 2x
        smallBlind = smallBlind * 2
        bigBlind = bigBlind * 2
        time = (5 * 1)
        return
    }

    return (
        <Layout>
            <TopNav
                middleContent="Tournament Page"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color={isDarkmode ? themeColor.white100 : "#191921"}
                    />
                }
                leftAction={() => navigation.goBack()}
            />
            <View
                style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <Text 
                    style={{
                    fontSize: 45
                    }}
                >Level {level}</Text>
            <Button title="start/pause" onPress={timerSwitch} />
            <View>
                <Text>{}</Text>
            </View>
                <Text fontWeight="bold">Blinds: {smallBlind}/{bigBlind}</Text>
                <Text>Break: 60:00</Text>
            </View>
        </Layout>
    );
}
