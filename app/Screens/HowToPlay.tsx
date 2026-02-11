import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function HowToPlayScreen() {
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

      {/* Small logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to Play</Text>

          <View style={styles.row}>
            <View style={styles.peopleIcon}>
              <Ionicons name="people" size={34} color="#3b82f6" />
            </View>

            <Text style={styles.cardText}>
              Join or host locally, read the question, type your answer before
              time runs out, avoid invalid words, earn points each round,
              highest total score wins.
            </Text>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Correct answer</Text>

          <View style={styles.row}>
            <View style={styles.correctIcon}>
              <Ionicons name="checkmark" size={28} color="#fff" />
            </View>

            <Text style={styles.cardText}>
              A correct answer is meaningful, matches the question language,
              uses four or more characters, avoids emojis, spam, or profanity,
              and is submitted before the timer ends to receive full round
              points.
            </Text>
          </View>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wrong Answer</Text>

          <View style={styles.row}>
            <View style={styles.wrongIcon}>
              <Ionicons name="close" size={26} color="#fff" />
            </View>

            <Text style={styles.cardText}>
              A wrong answer appears when your response breaks rules such as too
              few words, spam language, emojis, wrong or irrelevant. The system
              records it, gives zero points, and you continue next round.
            </Text>
          </View>
        </View>
      </ScrollView>
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
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 16,
  },

  card: {
    backgroundColor: "#cfd4dd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 12,
    color: "#2d3748",
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    fontSize: 12,
    color: "#2d3748",
    lineHeight: 18,
  },

  peopleIcon: {
    width: 56,
    height: 56,
    backgroundColor: "#e6ecff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  correctIcon: {
    width: 56,
    height: 56,
    backgroundColor: "#22c55e",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  wrongIcon: {
    width: 56,
    height: 56,
    backgroundColor: "#ef4444",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});
