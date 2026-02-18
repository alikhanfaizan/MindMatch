import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorage {
  async setUsername(username: string) {
    await AsyncStorage.setItem("username", username);
  }

  async getUsername(): Promise<string | null> {
    return AsyncStorage.getItem("username");
  }
}

export default new LocalStorage();
