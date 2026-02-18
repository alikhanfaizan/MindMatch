import GameEngine from "./GameEngine";
import TimerService from "./TimeService";
import AnswerValidator from "../validation/AnswerValidation";
import ScoreCalculator from "../scoring/ScoreCalculator";
import { AnswerPayload, ValidationResult } from "../types/GameTypes";
import QuestionService from "../data/QuestionService";

class RoundManager {
  private currentQuestion: string | null = null;
  private answers: Map<string, ValidationResult> = new Map();

  /* =========================
     START ROUND
  ========================= */

  public startRound(duration: number) {
    const question = QuestionService.getRandomQuestion();

    this.currentQuestion = question;
    this.answers.clear();

    TimerService.startTimer(duration, () => {
      this.finishRound();
    });

    console.log("📘 Round started with question:", question);
  }

  /* =========================
     SUBMIT ANSWER
  ========================= */

  public submitAnswer(payload: AnswerPayload) {
    if (TimerService.isTimeExpired()) {
      console.log("Answer rejected - timer expired");
      return;
    }

    const config = (GameEngine as any).config;

    const validation = AnswerValidator.validate(
      payload,
      config.language,
      TimerService.getRoundStartTime() || 0,
      config.timerPerRound,
    );

    this.answers.set(payload.playerId, validation);

    if (validation.valid) {
      const scoreResult = ScoreCalculator.calculate(validation);
      GameEngine.updatePlayerScore(payload.playerId, scoreResult.points);
    }
  }

  /* =========================
     FINISH ROUND
  ========================= */

  private finishRound() {
    console.log("Round finished");

    GameEngine.endRound();
  }

  /* =========================
     GET QUESTION
  ========================= */

  public getCurrentQuestion() {
  return this.currentQuestion;
}


  /* =========================
     GET ANSWERS
  ========================= */

  public getRoundAnswers() {
    return this.answers;
  }
}

export default new RoundManager();
