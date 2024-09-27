import CustomButton from "@/components/auth/CustomButton";
import { BASE_URL } from "@/lib/config";
import { fetchEmployees } from "@/lib/http";
import { router, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR from "swr";

export default function Page() {
  const { data, isLoading } = useSWR(`${BASE_URL}/employees`, fetchEmployees)

  if (data && !isLoading) {
    return <Redirect href={'/employees'}/>
  }

  return (
    <SafeAreaView className="bg-neutral-900 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center items-center w-full h-full px-4">
          <Text className="text-3xl font-semibold text-center text-neutral-100">
            Welcome to Sleeky Programmers
          </Text>
          <CustomButton title="Sign in to continue" containerStyles="mt-7 w-full" handlePress={() => router.push('/sign-in')} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
