import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { readSampleData } from "./api/health-connect";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    try {
      readSampleData();
    } catch (error: any) {
      console.log("h", error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }, []);

  useEffect(() => {
    ToastAndroid.show("yo", ToastAndroid.LONG);
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
