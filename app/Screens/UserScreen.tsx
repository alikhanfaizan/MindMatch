import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function UsernameScreen() {
  const [username, setUsername] = useState("");

  const handleContinue = () => {
    if (!username) return;
    router.push("/Screens/Home"); // update later
  };

  return (
    <LinearGradient
      colors={["#0f1722", "#1b2433", "#0f1722"]}
      style={styles.container}
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
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

      {/* Heading */}
      <Text style={styles.heading}>Enter Your Username</Text>

      {/* Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Player123"
          placeholderTextColor="#9aa4b2"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <Ionicons name="person" size={18} color="#5c6b82" />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>

      {/* Footer note */}
      <Text style={styles.note}>
        This username will be stored locally.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  topBar: {
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
    width: 110,
    height: 110,
    alignSelf: "center",
    marginTop: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 30,
  },

  whiteText: {
    color: "#fff",
  },

  redText: {
    color: "#ff4b4b",
  },

  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 20,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#263246",
    borderRadius: 30,
    paddingHorizontal: 18,
    height: 55,
    borderWidth: 1,
    borderColor: "#3a465c",
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },

  button: {
    marginTop: 28,
    backgroundColor: "#e53935",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e53935",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  note: {
    color: "#aab3c2",
    fontSize: 12,
    textAlign: "center",
    marginTop: 14,
  },
});
