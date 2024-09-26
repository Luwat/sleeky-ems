import { View, Text, AppState } from "react-native";
import { Stack } from "expo-router";
import { SWRConfig } from "swr";

const RootLayout = () => {
  return (
    <SWRConfig value={{
      provider: () => new Map(),
      isVisible: () => { return true },
      initFocus(callback) {
        let appState = AppState.currentState
   
        const onAppStateChange = (nextAppState: any) => {
          /* If it's resuming from background or inactive mode to active one */
          if (appState.match(/inactive|background/) && nextAppState === 'active') {
            callback()
          }
          appState = nextAppState
        }
   
        // Subscribe to the app state change events
        const subscription = AppState.addEventListener('change', onAppStateChange)
   
        return () => {
          subscription.remove()
        }
      }
    }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
    </SWRConfig>
  );
};

export default RootLayout;
