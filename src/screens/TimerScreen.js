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



export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  let smallBlind = 25;
  let bigBlind = 50;
  let level = 1;
  let isRunning = true
  
  
  const timerSwitch = () => {
    isRunning = !isRunning
  }
  
  const blindLevel = () => {
    // variables to track go here
    let time = (60 * 15)
    // timer function
    if (!isRunning) {
        return
    } else if (isRunning) {
        setInterval(callback, 1000);

        function callback() {
            time--
            console.log(`minutes: ${Math.floor(time / 60)} and seconds: ${Math.floor(time % 60)}`)
        } 
    }

    
    // call a function to restart clock
      // plus one to the level
      level = level + 1
      // multiply the blinds by 2x
      smallBlind = smallBlind * 2
      bigBlind = bigBlind * 2
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
            <Text>{blindLevel()}</Text>
        </View>
        <Text fontWeight="bold">Blinds: {smallBlind}/{bigBlind}</Text>
        <Text>Break: 60:00</Text>
      </View>
    </Layout>
  );
}
