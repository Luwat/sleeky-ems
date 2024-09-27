import CustomButton from "@/components/auth/CustomButton";
import FormField from "@/components/auth/FormField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { BASE_URL } from "@/lib/config";
import Error from "@/components/Error";
import AuthDecide from "@/components/auth/AuthDecide";
import useSWRMutation from "swr/mutation";
import { signUp } from "@/lib/auth";

const SignIn = () => {
  const {
    data,
    trigger,
    isMutating,
    error,
  } = useSWRMutation(`${BASE_URL}/auth/login`, signUp);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    const result = await trigger({
      ...data,
      email: form.email,
      password: form.password,
      isMutating,
    });

    if (result) {
      result;
      router.replace("/employees");
    }

    if (error) {
      error;
      return
    }
  };

  // if (isLoggedIn && !isLoading) {
  //   console.log(accessToken.get)
  //   return <Redirect href={'/employees'}/>
  // }

  return (
    <SafeAreaView className="h-full bg-neutral-900">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <View>
            <Text className="text-neutral-100 text-2xl text-center font-extrabold">
              Log in to view employees data
            </Text>
          </View>
          {error && <Error error={error} />}
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
            title={isMutating ? "Loading..." : "Sign in"}
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isMutating}
          />

          <AuthDecide
            ask="Don't have an account?"
            title="Sign-up"
            href="/sign-up"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignIn;
