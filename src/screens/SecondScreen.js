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
import CountDown from 'react-native-countdown-component';

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();

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

          >Level 1</Text>
        {/* <Text fontWeight="bold"
          style={{
            fontSize: 60
          }}
        >00:00</Text> */}

        <CountDown
          until={60 * 10 + 30}
          size={30}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: '#999'}}
          // digitTxtStyle={{color: '#1CC625'}}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
        />

        <Text fontWeight="bold">Blinds: 50/100</Text>
        <Text>Break: 60:00</Text>
      </View>
    </Layout>
  );
}

// import React, { useEffect, useState } from "react";
// import { View, Button } from "react-native";
// import {
//   Layout,
//   TopNav,
//   Text,
//   themeColor,
//   useTheme,
// } from "react-native-rapi-ui";
// import { Ionicons } from "@expo/vector-icons";
// import BackgroundTimer from "react-native-background-timer";

// export default function ({ navigation }) {
//   const { isDarkmode } = useTheme();

//   const [secondsLeft, setSecondsLeft] = useState(3601);
//   const [timerOn, setTimerOn] = useState(false);

//   useEffect(() => {
//     if (timerOn) startTimer();
//     else BackgroundTimer.stopBackgroundTimer();

//     return () => {
//       BackgroundTimer.stopBackgroundTimer();
//     };
//   }, [timerOn])

//   useEffect(() => {
//     if(secondsLeft === 0) {
//       BackgroundTimer.stopBackgroundTimer();
//     }
//   }, [secondsLeft])

//   const startTimer = () => {
//     BackgroundTimer.runBackgroundTimer(() => {
//       setSecondsLeft((secs) => {
//         if(secs > 0) return secs - 1
//         else return 0;
//       })
//     },
//     1000);
//   }

//   const clockify = () => {
//     let hours = Math.floor(secondsLeft / 60 / 60)
//     let mins = Math.floor(secondsLeft / 60 % 60)
//     let seconds = Math.floor(secondsLeft % 60)

//     let displayHours = hours < 10 ? `0${hours}` : hours;
//     let displayMins = mins < 10 ? `0${mins}` : mins;
//     let displaySecs = seconds < 10 ? `0${seconds}` : seconds;

//     return (
//       displayHours,
//       displayMins,
//       displaySecs
//     )
//   }

//   return (
//     <Layout>
//       <TopNav
//         middleContent="Tournament Page"
//         leftContent={
//           <Ionicons
//             name="chevron-back"
//             size={20}
//             color={isDarkmode ? themeColor.white100 : "#191921"}
//           />
//         }
//         leftAction={() => navigation.goBack()}
//       />
//       <View
//         style={{
//           flex: 1,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
        
//         <Text 
//           style={{
//             fontSize: 45
//           }}

//           >Level 1</Text>
//         <Text fontWeight="bold"
//           style={{
//             fontSize: 60
//           }}
//         >{clockify().displayMins}.{clockify().displaySecs}</Text>
//         <Button
//           title="Start/Pause"
//           onPress={() => setTimerOn((current) => !current)}
//         ></Button>
//         <Text fontWeight="bold">Blinds: 50/100</Text>
//         <Text>Break: 60:00</Text>
//       </View>
//     </Layout>
//   );
// }
