import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";

const EmployeeProfileLayout = () => {
  return <Stack screenOptions={{
    headerShown: false
  }}/>;
};

export default EmployeeProfileLayout;
