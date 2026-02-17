import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function HostSetupScreen() {
  const [rounds, setRounds] = useState(10);
  const [time, setTime] = useState(120); // seconds

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <LinearGradient
      colors={["#0f1722", "#1b2433", "#0f1722"]}
      style={styles.container}
    >
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.rightTop}>
          <Ionicons name="settings-outline" size={18} color="#fff" />
          <Text style={styles.lang}>EN | GR</Text>
        </View>
      </View>

      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>
        <Text style={styles.whiteText}>MIND </Text>
        <Text style={styles.redText}>MATCH</Text>
      </Text>

      {/* Header */}
      <Text style={styles.heading}>Create Game</Text>
      <View style={styles.divider} />

      {/* Number of Rounds */}
      <Text style={styles.label}>Number of Rounds</Text>

      <View style={styles.controlRow}>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => setRounds(Math.max(1, rounds - 1))}
        >
          <Text style={styles.circleText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.value}>{rounds}</Text>

        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => setRounds(rounds + 1)}
        >
          <Text style={styles.circleText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Timer */}
      <Text style={styles.label}>Timer Per Round</Text>

      <View style={styles.controlRow}>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => setTime(Math.max(30, time - 30))}
        >
          <Text style={styles.circleText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.value}>{formatTime(time)}</Text>

        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => setTime(time + 30)}
        >
          <Text style={styles.circleText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Question Pool */}
      <Text style={styles.label}>Question Pool</Text>

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Random Questions</Text>
        <Ionicons name="chevron-down" size={18} color="#fff" />
      </TouchableOpacity>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => router.push("/Screens/WaitingRoom")}
      >
        <Text
          style={styles.startText}
        //   onPress={() => router.push("/Screens/GamePlay")}
        >
          START
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>⚡ Bluetooth Multiplayer</Text>
        <Text style={styles.footerText}>🌐 No Internet Required</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: "center",
  },

  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rightTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  lang: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 6,
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },

  whiteText: {
    color: "#fff",
  },

  redText: {
    color: "#ff4b4b",
  },

  heading: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#3a465c",
    marginVertical: 20,
  },

  label: {
    color: "#cbd5e1",
    fontSize: 12,
    marginBottom: 6,
    marginTop: 12,
  },

  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  circleBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e53935",
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  value: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 30,
  },

  dropdown: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1c2533",
    borderWidth: 1,
    borderColor: "#3a465c",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 18,
    marginTop: 10,
  },

  dropdownText: {
    color: "#fff",
    fontSize: 14,
  },

  startButton: {
    marginTop: 26,
    backgroundColor: "#e53935",
    width: "90%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e53935",
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  startText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  footer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#8b97a8",
    fontSize: 11,
    marginBottom: 4,
  },
});
