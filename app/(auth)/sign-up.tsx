import CustomButton from "@/components/auth/CustomButton";
import FormField from "@/components/auth/FormField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {
    router.push('/sign-in')
  }

  return (
    <SafeAreaView className="h-full bg-neutral-900">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <View>
            <Text className="text-neutral-100 text-2xl text-center font-extrabold">Join Sleeky Programmers</Text>
          </View>
          <FormField
            title="Username"
            placeholder="Enter username"
            value={form.email}
            handleChangeText={(e: string) => {
              setForm({ ...form, email: e });
            }}
            keyboardType="default"
          />
          <FormField
            title="Email"
            placeholder="Enter email"
            value={form.email}
            handleChangeText={(e: string) => {
              setForm({ ...form, email: e });
            }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter password"
            value={form.password}
            handleChangeText={(e: string) => {
              setForm({ ...form, password: e });
            }}
          />

          <CustomButton title="Sign up" handlePress={submit} containerStyles="mt-7 w-full" />
          <View>
            <Text className="text-neutral-500 text-center text-lg mt-3">Don't have an account? <Link href="/sign-in" className="text-orange-500">Sign in</Link></Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};

export default SignUp;

