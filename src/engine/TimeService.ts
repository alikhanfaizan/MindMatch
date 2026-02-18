class TimerService {
  private roundStartTime: number | null = null;
  private duration: number = 0; // seconds
  private interval: NodeJS.Timeout | null = null;
  private onExpireCallback: (() => void) | null = null;

  /* =========================
     START TIMER (HOST ONLY)
  ========================= */

  public startTimer(durationSeconds: number, onExpire: () => void) {
    this.duration = durationSeconds;
    this.roundStartTime = Date.now();
    this.onExpireCallback = onExpire;

    this.stopTimer();

    this.interval = setInterval(() => {
      if (!this.roundStartTime) return;

      const elapsed = Date.now() - this.roundStartTime;

      if (elapsed >= this.duration * 1000) {
        this.handleExpire();
      }
    }, 250);

    console.log("⏱ Timer started:", durationSeconds);
  }

  /* =========================
     MIRROR TIMER (CLIENT)
  ========================= */

  public syncTimer(startTimestamp: number, durationSeconds: number) {
    this.duration = durationSeconds;
    this.roundStartTime = startTimestamp;
  }

  /* =========================
     GET REMAINING TIME
  ========================= */

  public getRemainingTime(): number {
  if (!this.roundStartTime) return this.duration;

  const elapsed = Date.now() - this.roundStartTime;
  const remaining = this.duration * 1000 - elapsed;

  return Math.max(0, Math.floor(remaining / 1000));
}


  /* =========================
     VALIDATION CHECK
  ========================= */

  public isTimeExpired(): boolean {
    if (!this.roundStartTime) return false;

    return Date.now() > this.roundStartTime + this.duration * 1000;
  }

  /* =========================
     EXPIRE HANDLER
  ========================= */

  private handleExpire() {
    this.stopTimer();

    if (this.onExpireCallback) {
      this.onExpireCallback();
    }
  }

  /* =========================
     STOP TIMER
  ========================= */

  public stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  public getRoundStartTime(): number | null {
    return this.roundStartTime;
  }
}

export default new TimerService();
