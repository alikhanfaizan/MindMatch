export type Language = "EN" | "GR";

export type GameState =
  | "IDLE"
  | "LOBBY"
  | "MATCH_STARTING"
  | "ROUND_ACTIVE"
  | "ROUND_END"
  | "MATCH_END";

export interface Player {
  id: string;
  username: string;
  score: number;
}

export interface MatchConfig {
  rounds: number;
  timerPerRound: number;
  language: Language;
  questionPool: string;
}

export interface AnswerPayload {
  playerId: string;
  text: string;
  submittedAt: number; // timestamp
}

export interface ValidationResult {
  valid: boolean;
  reason?: string;
  cleanedText?: string;
  wordCount?: number;
}

export interface ScoreResult {
  points: number;
  valid: boolean;
}
