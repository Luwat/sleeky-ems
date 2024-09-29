import { Pressable, Text, View } from "react-native";
import React from "react";
import useSWR from "swr";
import { BASE_URL } from "@/lib/config";
import { logout } from "@/lib/auth";
import { router } from "expo-router";
import useSWRMutation from "swr/mutation";

const LogoutButton = () => {
  const { trigger } = useSWRMutation(`${BASE_URL}/auth/login`, logout);

  const handleLogout = () => {
    trigger("accessToken");
    router.replace("/");
  };

  return (
    <View className="mr-10">
      <Pressable className="bg-neutral-700 py-1 px-2 rounded-md" onPress={handleLogout}>
        <Text className="text-neutral-50">Logout</Text>
      </Pressable>
    </View>
  );
};

export default LogoutButton;
