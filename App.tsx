import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HelloApp: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.helloBox}>
        <Text style={styles.greetingText}>Hello React Native!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3c6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  helloBox: {
    backgroundColor: "#3366ff",
    padding: 30,
  },
  greetingText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default HelloApp;
