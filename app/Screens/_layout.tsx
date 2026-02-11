import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserScreen" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Lobby" />
      <Stack.Screen name="HowToPlay" />
      <Stack.Screen name="Settings" />
      
    </Stack>
  );
}
