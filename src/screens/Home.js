import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Welcome to the tournament manager!
            </Text>
            {/* <Button
              style={{ marginTop: 10 }}
              text="Rapi UI Documentation"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            /> */}
            <Button
              text="Go to the tournament"
              onPress={() => {
                navigation.navigate("TimerScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />

            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
