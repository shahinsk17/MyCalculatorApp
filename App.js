 // App.js
import { StyleSheet, View, StatusBar } from "react-native";
 import Homex from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Homex />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light gray background for better UI
    alignItems: "center",
    justifyContent: "center",
  },
});
