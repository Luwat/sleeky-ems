import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Sleeky Programmers</Text>
      <Link href="/employees">Go to employees page</Link>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
