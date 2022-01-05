import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(3);
  const [emojis, setEmojis] = useState(["🗿", "📃", "✂️"]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);
  const backgroundColor =
    count === 0 ? "#000" : count === 1 ? "#ff5" : count === 2 ? "#f10" : "#f15";
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {Boolean(count) ? (
        <Text style={styles.textStyle}>{count}</Text>
      ) : (
        <>
          <Text style={styles.emojiStyle}>
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </Text>
          <Button
            title="Play Again"
            onPress={() => {
              setCount(3);
            }}
          />
        </>
      )}
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 130,
    fontWeight: "bold",
  },
  emojiStyle: {
    fontSize: 130,
  },
});
