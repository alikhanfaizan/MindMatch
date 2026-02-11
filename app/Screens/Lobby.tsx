import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function LobbyScreen() {
  return (
    <LinearGradient
      colors={["#0f1722", "#1b2433", "#0f1722"]}
      style={styles.container}
    >
      {/* Top Bar */}
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

      {/* Section Heading */}
      <Text style={styles.heading}>Local Multiplayer Lobby</Text>

      <View style={styles.divider} />

      {/* Host Game Button */}
      <TouchableOpacity
        style={styles.hostButton}
        onPress={() => router.push("/screens/HostSetup")}
      >
        <Text style={styles.hostText}>HOST GAME</Text>
      </TouchableOpacity>

      {/* Join Game Button */}
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => router.push("/screens/JoinGame")}
      >
        <Text style={styles.joinText}>JOIN GAME</Text>
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
    marginBottom: 22,
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
    marginBottom: 10,
  },

  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#3a465c",
    marginBottom: 40,
    marginTop: 10,
  },

  hostButton: {
    backgroundColor: "#e53935",
    width: "85%",
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#e53935",
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  hostText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  joinButton: {
    width: "85%",
    height: 54,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#3a465c",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c2533",
  },

  joinText: {
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
