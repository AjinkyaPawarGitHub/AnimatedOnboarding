import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import Slide from "../data/Slide";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={Slide}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator data={Slide} scrollx={scrollx} />
        <NextButton />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
