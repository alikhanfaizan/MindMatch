import { AnswerPayload, ValidationResult, Language } from "../types/GameTypes";

class AnswerValidator {
  /* ===============================
     PUBLIC ENTRY POINT
  =============================== */

  public validate(
    payload: AnswerPayload,
    language: Language,
    roundStartTime: number,
    roundDuration: number
  ): ValidationResult {
    const text = payload.text.trim();

    // 1️⃣ Empty check
    if (!text) return this.invalid("Empty answer");

    // 2️⃣ Timing check
    const now = payload.submittedAt;
    if (now > roundStartTime + roundDuration * 1000) {
      return this.invalid("Submitted after timer expired");
    }

    // 3️⃣ Trivial repeated characters
    if (/^(.)\1+$/.test(text)) {
      return this.invalid("Repeated characters");
    }

    // 4️⃣ Emoji check
    const emojiCount = this.countEmojis(text);
    if (emojiCount > 3) {
      return this.invalid("Excessive emoji usage");
    }

    // emoji-only detection
    if (emojiCount > 0 && this.removeEmojis(text).trim().length === 0) {
      return this.invalid("Emoji only answer");
    }

    // 5️⃣ Language enforcement
    if (!this.matchesLanguage(text, language)) {
      return this.invalid("Language mismatch");
    }

    // 6️⃣ Profanity check (placeholder)
    if (this.containsProfanity(text, language)) {
      return this.invalid("Profanity detected");
    }

    // 7️⃣ Length constraints
    if (text.length < 4) {
      return this.invalid("Too short");
    }

    if (text.length > 300) {
      return this.invalid("Too long");
    }

    // 8️⃣ Word count
    const cleaned = this.cleanText(text);
    const wordCount = this.countWords(cleaned);

    if (wordCount < 4) {
      return this.invalid("Less than 4 words");
    }

    // 9️⃣ Valid
    return {
      valid: true,
      cleanedText: cleaned,
      wordCount,
    };
  }

  /* ===============================
     HELPERS
  =============================== */

  private invalid(reason: string): ValidationResult {
    return { valid: false, reason };
  }

  private cleanText(text: string): string {
    return text
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  private countWords(text: string): number {
    if (!text) return 0;
    return text.split(" ").length;
  }

  private countEmojis(text: string): number {
    const emojiRegex = /\p{Extended_Pictographic}/gu;
    return (text.match(emojiRegex) || []).length;
  }

  private removeEmojis(text: string): string {
    return text.replace(/\p{Extended_Pictographic}/gu, "");
  }

  private matchesLanguage(text: string, language: Language): boolean {
    if (language === "EN") {
      return /^[A-Za-z0-9\s.,!?'"-]*$/.test(text);
    }

    if (language === "GR") {
      return /^[\u0370-\u03FF\u1F00-\u1FFF0-9\s.,!?'"-]*$/.test(text);
    }

    return true;
  }

  private containsProfanity(text: string, language: Language): boolean {
    return false;
  }
}

export default new AnswerValidator();
