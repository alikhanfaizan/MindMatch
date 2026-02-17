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

export default function JoinGameScreen() {
  const devices = ["Device ABC", "Device XYZ"];
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
      <Text style={styles.heading}>Device Discovery</Text>
      <Text style={styles.subheading}>Available Host Devices</Text>

      {/* Devices card */}
      <View style={styles.deviceCard}>
        {devices.map((device, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.deviceRow,
              index !== devices.length - 1 && styles.rowDivider,
            ]}
          >
            <Ionicons name="bluetooth" size={18} color="#4f7cff" />
            <Text style={styles.deviceName}>{device}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.helperText}>Tap device to connect...</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Connected Lobby */}
      <Text style={styles.connectedTitle}>Connected Lobby</Text>

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

      <Text style={styles.waitText}>Waiting for host to start...</Text>
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

  subheading: {
    color: "#aab3c2",
    fontSize: 12,
    marginBottom: 12,
  },

  deviceCard: {
    width: "90%",
    backgroundColor: "#1c2533",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#3a465c",
    overflow: "hidden",
    marginBottom: 8,
  },

  deviceRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  deviceName: {
    color: "#ffffff",
    fontSize: 15,
    marginLeft: 10,
  },

  helperText: {
    color: "#8b97a8",
    fontSize: 11,
    marginBottom: 20,
  },

  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#3a465c",
    marginVertical: 16,
  },

  connectedTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  playerCard: {
    width: "90%",
    backgroundColor: "#1c2533",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#3a465c",
    overflow: "hidden",
  },

  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  playerName: {
    color: "#ffffff",
    fontSize: 15,
    marginLeft: 10,
  },

  waitText: {
    color: "#8b97a8",
    fontSize: 11,
    marginTop: 10,
  },

  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#3a465c",
  },
});
