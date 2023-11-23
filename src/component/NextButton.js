import { StyleSheet, TouchableOpacity, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
const NextButton = () => {
  const size = 128;
  const strokeWidth = 10;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPercentage = 33.33;

  const gradientId = "progressGradient";

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="70" origin={center}>
          <Defs>
            <LinearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="yellow" />
              <Stop offset={`${progressPercentage}%`} stopColor="yellow" />
              <Stop offset={`${progressPercentage}%`} stopColor="#E6E7E8" />
              <Stop offset="100%" stopColor="#E6E7E8" />
            </LinearGradient>
          </Defs>

          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={`url(#${gradientId})`}
            fill="none"
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={58} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    position: "absolute",
    backgroundColor: "yellow",
    borderRadius: 100,
    padding: 20,
  },
});
