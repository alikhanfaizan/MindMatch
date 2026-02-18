import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import RoundManager from "@/src/engine/RoundManager";
import GameEngine from "@/src/engine/GameEngine";
import TimeService from "@/src/engine/TimeService";

export default function GamePlayScreen() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [timer, setTimer] = useState(0);
  const [round, setRound] = useState(1);
  useEffect(() => {
    const loadGameData = setInterval(() => {
      const q = RoundManager.getCurrentQuestion();

      if (q) {
        setQuestion(q);
        clearInterval(loadGameData);
      }
    }, 200);

    setRound(GameEngine.getCurrentRound());

    const timerInterval = setInterval(() => {
      setTimer(TimeService.getRemainingTime());
    }, 500);

    return () => {
      clearInterval(loadGameData);
      clearInterval(timerInterval);
    };
  }, []);

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

      {/* Timer pill */}
      <View style={styles.timer}>
        <Ionicons name="timer-outline" size={18} color="#fff" />
        <Text style={styles.timerText}>
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
        </Text>
      </View>

      {/* Question index */}
      <Text style={styles.qIndex}>Questions : {round}</Text>

      {/* Question */}
      <Text style={styles.question}>{question}</Text>

      {/* Answer box */}
      <View style={styles.answerBox}>
        <TextInput
          placeholder="Type your answer..."
          placeholderTextColor="#8b97a8"
          style={styles.input}
          multiline
          value={answer}
          onChangeText={setAnswer}
        />
      </View>

      {/* Username */}
      <Text style={styles.username}>Player123</Text>

      {/* Submit button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          console.log("📨 Submitting answer...");

          RoundManager.submitAnswer({
            playerId: "host-player",
            text: answer,
            submittedAt: Date.now(),
          });

          console.log("📨 Answer submitted:", answer);
        }}
      >
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  /* Top bar */
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

  /* Branding */
  logo: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 12,
  },

  whiteText: { color: "#fff" },
  redText: { color: "#ff4b4b" },

  /* Timer */
  timer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e53935",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 26,
    marginVertical: 12,
    shadowColor: "#e53935",
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  timerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  qIndex: {
    color: "#cbd5e1",
    fontSize: 12,
    marginTop: 10,
  },

  question: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 16,
    lineHeight: 26,
  },

  /* Answer */
  answerBox: {
    backgroundColor: "#1c2533",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#3a465c",
    padding: 14,
    minHeight: 120,
  },

  input: {
    color: "#fff",
    fontSize: 14,
  },

  username: {
    color: "#8b97a8",
    fontSize: 12,
    marginTop: 10,
  },

  /* Submit */
  submitButton: {
    backgroundColor: "#e53935",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#e53935",
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
