import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import GameController from "@/src/controllers/GameController";
import GameEngine from "@/src/engine/GameEngine";

export default function WaitingRoomScreen() {
  const players = ["Virat", "Dhoni"];

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

      {/* Section */}
      <Text style={styles.heading}>Hosting Lobby</Text>
      <View style={styles.divider} />

      {/* Host Device */}
      <Text style={styles.deviceName}>Rohit iPhone</Text>
      <Text style={styles.waitText}>Waiting for players...</Text>

      {/* Player List Card */}
      <View style={styles.playerCard}>
        {players.map((p, index) => (
          <View
            key={index}
            style={[
              styles.playerRow,
              index !== players.length - 1 && styles.rowDivider,
            ]}
          >
            <Ionicons name="person" size={18} color="#4f7cff" />
            <Text style={styles.playerName}>{p}</Text>
          </View>
        ))}
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          console.log("🟡 Host pressed START MATCH");
          GameEngine.joinPlayer({
            id: "mock-player",
            username: "TestPlayer",
            score: 0,
          });

          GameController.startMatch();

          router.push("/Screens/GamePlay");
        }}
      >
        <Ionicons name="chevron-back" size={18} color="#fff" />
        <Text style={styles.startText}>START</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.note}>
        Game starts when at least 2 players are connected
      </Text>

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

  deviceName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  waitText: {
    color: "#aab3c2",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 16,
  },

  playerCard: {
    width: "90%",
    backgroundColor: "#1c2533",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#3a465c",
    marginBottom: 24,
    overflow: "hidden",
  },

  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#3a465c",
  },

  playerName: {
    color: "#ffffff",
    fontSize: 15,
    marginLeft: 10,
  },

  startButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e53935",
    width: "90%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    shadowColor: "#e53935",
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  startText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 10,
    letterSpacing: 1,
  },

  note: {
    color: "#8b97a8",
    fontSize: 11,
    marginTop: 8,
    textAlign: "center",
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
