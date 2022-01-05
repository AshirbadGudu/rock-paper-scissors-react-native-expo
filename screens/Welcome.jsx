import { Button, StyleSheet, Text, View } from "react-native";

export default function Welcome({ setCurrentScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>rock paper scissors</Text>
      <Text style={styles.emojiStyle}>🗿 📃 ✂️</Text>
      <Button title="Play Now" onPress={() => setCurrentScreen("Counter")} />
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
  textStyle: {
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
  },
  emojiStyle: {
    fontSize: 65,
    marginVertical: 20,
  },
});
