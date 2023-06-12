import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { readSampleData } from "./api/health-connect";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    readSampleData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>eyo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
