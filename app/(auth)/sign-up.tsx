import CustomButton from "@/components/auth/CustomButton";
import FormField from "@/components/auth/FormField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { BASE_URL } from "@/lib/config";
import Error from "@/components/Error";
import useSWRMutation from "swr/mutation";
import { signUp } from "@/lib/auth";
import { AuthData } from "@/lib/definitions";
import AuthDecide from "@/components/auth/AuthDecide";

const SignUp = () => {
  const {
    data,
    trigger,
    isMutating: isLoading,
    error,
  } = useSWRMutation(`${BASE_URL}/auth/register`, signUp);
  const [form, setForm] = useState<AuthData>({
    email: "",
    password: "",
  });

  const submit = async () => {
    const result = await trigger({
      ...data,
      email: form.email,
      password: form.password,
      isLoading,
    });

    if (result) {
      result;
      router.replace("/employees");
    }

    if (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView className="h-full bg-neutral-900">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <View>
            <Text className="text-neutral-100 text-2xl text-center font-extrabold">
              Join Sleeky Programmers
            </Text>
          </View>
          {error && <Error error={error.message} />}
          <FormField
            title="Email"
            placeholder="Enter email"
            value={form.email}
            handleChangeText={(email: string) => {
              setForm({ ...form, email });
            }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter password"
            value={form.password}
            handleChangeText={(password: string) => {
              setForm({ ...form, password });
            }}
          />

          <CustomButton
            title={isLoading ? "Loading..." : "Sign up"}
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isLoading}
          />

          <AuthDecide
            ask="Already registered?"
            title="Sign-in"
            href="/sign-in"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignUp;
