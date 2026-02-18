import { ValidationResult, ScoreResult } from "../types/GameTypes";

class ScoreCalculator {
  public calculate(validation: ValidationResult): ScoreResult {
    if (!validation.valid || !validation.wordCount) {
      return {
        valid: false,
        points: 0,
      };
    }

    const wc = validation.wordCount;

    let points = 0;

    if (wc >= 4 && wc <= 6) points = 3;
    else if (wc >= 7 && wc <= 9) points = 4;
    else if (wc >= 10 && wc <= 12) points = 5;
    else if (wc >= 13 && wc <= 15) points = 6;
    else if (wc >= 16 && wc <= 18) points = 7;
    else if (wc >= 19 && wc <= 21) points = 8;
    else if (wc >= 22 && wc <= 24) points = 9;
    else if (wc >= 25) points = 10;

    return {
      valid: true,
      points,
    };
  }
}

export default new ScoreCalculator();
