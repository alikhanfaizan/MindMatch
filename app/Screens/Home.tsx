import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0f1722", "#1b2433", "#0f1722"]}
      style={styles.container}
    >
      {/* Top bar */}
      <View style={styles.topBar}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <View style={styles.rightTop}>
          <Ionicons name="settings-outline" size={18} color="#fff" 
          onPress={() => router.push("/Screens/Settings")}/>
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

      {/* Tagline */}
      <Text style={styles.tagline}>Think Fast. Type Smart.</Text>
      <Text style={styles.subtitle}>
        Multiplayer Psychological Word Challenge
      </Text>

      {/* Start Game Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => router.push("/Screens/Lobby")}
      >
        <Ionicons
          name="play"
          size={18}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.startText}>START GAME</Text>
      </TouchableOpacity>

      {/* Secondary buttons */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/Screens/HowToPlay")}
      >
        <Text style={styles.secondaryText}>HOW TO PLAY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}
      onPress={() => router.push("/Screens/Settings")}>
        <Text style={styles.secondaryText}>SETTINGS</Text>
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
    marginBottom: 16,
  },

  whiteText: {
    color: "#fff",
  },

  redText: {
    color: "#ff4b4b",
  },

  tagline: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  subtitle: {
    color: "#aab3c2",
    fontSize: 13,
    marginTop: 6,
    marginBottom: 40,
  },

  startButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e53935",
    height: 58,
    width: "85%",
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 18,
    shadowColor: "#e53935",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },

  startText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  secondaryButton: {
    width: "85%",
    height: 52,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#3a465c",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#1c2533",
  },

  secondaryText: {
    color: "#d0d6e0",
    fontSize: 14,
    fontWeight: "600",
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
