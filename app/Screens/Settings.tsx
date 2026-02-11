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

export default function SettingsScreen() {
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
      </View>

      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Settings card */}
      <View style={styles.card}>
        {/* Language */}
        <View style={styles.row}>
          <Text style={styles.title}>Language</Text>
          <Ionicons name="chevron-down" size={18} color="#5a6474" />
        </View>

        {/* Sounds */}
        <View style={styles.row}>
          <Text style={styles.title}>Sounds</Text>
        </View>

        <View style={styles.subItem}>
          <Text style={styles.subText}>Master Sound</Text>
          <View style={styles.dot} />
        </View>

        <View style={styles.subItem}>
          <Text style={styles.subText}>Timer Tick Sound</Text>
          <View style={styles.dot} />
        </View>

        <View style={styles.subItem}>
          <Text style={styles.subText}>Result Sound</Text>
          <View style={styles.dot} />
        </View>

        {/* Vibration */}
        <View style={styles.row}>
          <Text style={styles.title}>Vibration / Haptics</Text>
          <View style={styles.dot} />
        </View>

        {/* Bluetooth */}
        <View style={styles.row}>
          <Text style={styles.title}>Bluetooth Settings Shortcut</Text>
        </View>

        {/* Theme */}
        <View style={styles.row}>
          <Text style={styles.title}>Theme</Text>
          <Ionicons name="chevron-up" size={18} color="#5a6474" />
        </View>

        <View style={styles.subItem}>
          <Text style={styles.subText}>Dark Mode</Text>
          <View style={styles.dot} />
        </View>

        {/* Data */}
        <View style={styles.row}>
          <Text style={styles.title}>Data & Cache</Text>
          <Ionicons name="chevron-down" size={18} color="#5a6474" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 60,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#cfd4dd",
    borderRadius: 14,
    padding: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3748",
  },

  subItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 6,
    marginBottom: 10,
  },

  subText: {
    fontSize: 12,
    color: "#4a5568",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#7a8597",
  },
});
