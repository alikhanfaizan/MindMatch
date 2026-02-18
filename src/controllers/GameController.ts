import GameEngine from "../engine/GameEngine";
import LocalStorage from "../storage/LocalStorage";

class GameController {
  /* =========================
     PLAYER SETUP
  ========================= */

  async registerPlayer(username: string) {
    console.log("🟡 Registering player:", username);

    await LocalStorage.setUsername(username);

    GameEngine.createLobby({
      id: "host-" + Date.now(),
      username,
      score: 0,
    });

    console.log("🟢 Lobby created. Host:", username);
  }

  /* =========================
     MATCH CONFIG
  ========================= */

  configureMatch(rounds: number, timer: number) {
    console.log("🟡 Configuring match...");
    console.log("Rounds:", rounds);
    console.log("Timer:", timer);

    GameEngine.configureMatch({
      rounds,
      timerPerRound: timer,
      language: "EN",
      questionPool: "random",
    });

    console.log("🟢 Match configuration saved.");
  }

  /* =========================
     START MATCH
  ========================= */

  startMatch() {
    console.log("🟡 Starting match...");

    GameEngine.startMatch();

    console.log("🟢 Match started. State:", GameEngine.getState());
  }
}

export default new GameController();
