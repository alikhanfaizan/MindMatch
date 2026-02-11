import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import { router } from "expo-router";
import logo from "../assets/images/logo.png";
export default function LoadingScreen() {
  const progress = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      // navigate after loading
      router.replace("/Screens/UserScreen"); // change later to your next screen
    });
  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "80%"],
  });

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>
        <Text style={styles.whiteText}>MIND </Text>
        <Text style={styles.redText}>MATCH</Text>
      </Text>

      {/* Loading label */}
      <Text style={styles.loadingText}>LOADING...</Text>

      {/* Progress bar container */}
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[styles.progressBarFill, { width: widthInterpolated }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2a3a",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 40,
  },

  whiteText: {
    color: "#ffffff",
  },

  redText: {
    color: "#ff4b4b",
  },

  loadingText: {
    color: "#ffffff",
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 10,
  },

  progressBarContainer: {
    width: "70%",
    height: 6,
    backgroundColor: "#ffffff30",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
});
