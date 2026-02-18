// src/engine/GameEngine.ts

export type GameState =
  | "IDLE"
  | "LOBBY"
  | "MATCH_STARTING"
  | "ROUND_ACTIVE"
  | "ROUND_END"
  | "MATCH_END";

export interface MatchConfig {
  rounds: number;
  timerPerRound: number; // seconds
  language: "EN" | "GR";
  questionPool: string;
}

export interface Player {
  id: string;
  username: string;
  score: number;
}

class GameEngine {
  private state: GameState = "IDLE";
  private players: Player[] = [];
  private currentRound = 0;
  private config: MatchConfig | null = null;

  /* ======================
     STATE MANAGEMENT
  ====================== */

  public getState(): GameState {
    return this.state;
  }

  private setState(newState: GameState) {
    this.state = newState;
    console.log("Game State →", newState);
  }

  /* ======================
     LOBBY
  ====================== */

  public createLobby(hostPlayer: Player) {
    console.log("🏠 Creating lobby for:", hostPlayer.username);
    this.players = [hostPlayer];
    this.setState("LOBBY");
  }

  public joinPlayer(player: Player) {
    if (this.state !== "LOBBY") return;
    this.players.push(player);
  }

  public getPlayers() {
    return this.players;
  }

  /* ======================
     MATCH SETUP
  ====================== */

  public configureMatch(config: MatchConfig) {
    this.config = config;
  }

  public startMatch() {
    console.log("🚀 startMatch() called");

    if (!this.config) throw new Error("Match config missing");
    if (this.players.length < 2) throw new Error("Not enough players");

    this.currentRound = 0;
    this.setState("MATCH_STARTING");

    this.startNextRound();
  }

  /* ======================
     ROUND CONTROL
  ====================== */

 private startNextRound() {
  if (!this.config) return;

  if (this.currentRound >= this.config.rounds) {
    this.endMatch();
    return;
  }

  this.currentRound += 1;
  this.setState("ROUND_ACTIVE");

  console.log(`🧠 Round ${this.currentRound} started`);

  // 🔥 trigger round manager (this starts timer + question)
  const RoundManager = require("./RoundManager").default;

  RoundManager.startRound(this.config.timerPerRound);

  console.log("⏱ Round services started");
}

  public endRound() {
    if (this.state !== "ROUND_ACTIVE") return;

    this.setState("ROUND_END");

    // next round automatically
    setTimeout(() => {
      this.startNextRound();
    }, 1500);
  }

  public getCurrentRound() {
    return this.currentRound;
  }

  /* ======================
     SCORING
  ====================== */

  public updatePlayerScore(playerId: string, points: number) {
    const player = this.players.find((p) => p.id === playerId);
    if (!player) return;

    player.score += points;
  }

  /* ======================
     MATCH END
  ====================== */

  private endMatch() {
    this.setState("MATCH_END");
    console.log("Match finished");
  }

  public getLeaderboard() {
    return [...this.players].sort((a, b) => b.score - a.score);
  }

  /* ======================
     RESET
  ====================== */

  public resetGame() {
    this.state = "IDLE";
    this.players = [];
    this.currentRound = 0;
    this.config = null;
  }
}

export default new GameEngine();
