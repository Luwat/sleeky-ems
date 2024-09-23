import CustomButton from "@/components/auth/CustomButton";
import FormField from "@/components/auth/FormField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { BASE_URL } from "@/lib/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Error from "@/components/Error";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    setIsLoading(true);

    try {
      if (!form.email || !form.password) {
        setError("All fields are required");
        return;
      }

      if (form.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setError("Invalid email address");
        return;
      }

      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.error) {
        if (Array.isArray(data.message)) {
          setError(data.message[0]);
          return;
        }
        setError(data.message);
        return;
      } else if (data.message === "Unauthorized") {
        setError((data.message = "Employer not authorized"));
        return;
      }

      await AsyncStorage.setItem("accessToken", data.accessToken);
      router.push("/employees");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            title={isLoading ? "Loading..." : "Sign in"}
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isLoading}
          />
          <View>
            <Text className="text-neutral-500 text-center text-lg mt-3">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-orange-500">
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignIn;
