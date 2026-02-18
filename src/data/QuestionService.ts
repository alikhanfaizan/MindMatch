class QuestionService {
  private questions: string[] = [
    "What has to be broken before you can use it?",
    "What comes once in a minute, twice in a moment, but never in a thousand years?",
    "What has a neck but no head, two arms but no hands?",
    "What gets wetter the more it dries?",
    "I speak without a mouth and hear without ears. What am I?",
    "What has keys but can't open locks?",
    "What has hands but can't clap?",
    "The more of this there is, the less you see. What is it?",
    "What can travel around the world while staying in one place?",
    "What has one eye but cannot see?"
    
  ];

  private usedQuestions: Set<string> = new Set();

  /* =========================
     GET RANDOM QUESTION
  ========================= */

  public getRandomQuestion(): string {
    const available = this.questions.filter(q => !this.usedQuestions.has(q));

    if (available.length === 0) {
      this.resetUsedQuestions();
      return this.getRandomQuestion();
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const question = available[randomIndex];

    this.usedQuestions.add(question);
    return question;
  }

  /* =========================
     RESET USED QUESTIONS
  ========================= */

  private resetUsedQuestions() {
    this.usedQuestions.clear();
  }

  /* =========================
     ADD QUESTIONS LATER
  ========================= */

  public addQuestions(newQuestions: string[]) {
    this.questions.push(...newQuestions);
  }
}

export default new QuestionService();
