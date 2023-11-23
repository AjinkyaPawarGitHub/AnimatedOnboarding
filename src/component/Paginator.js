import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";

const Paginator = ({ data, scrollx }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        height: 64,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,

    borderRadius: 5,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});
