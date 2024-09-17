import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";

const Employee = ({
  firstName,
  lastName,
  position,
}: {
  firstName: string;
  lastName: string;
  position: string;
}) => {
  return (
    <View className="w-5/6 m-5 py-5 rounded-2xl flex-1 justify-center items-center bg-neutral-800 border-neutral-100 border-l shadow-md shadow-neutral-100">
      <View className="justify-center items-center">
        <View>
          <Text className="text-neutral-100 text-xl">
            Full name: {lastName} {firstName}
          </Text>
          <Text className="text-neutral-100 text-xl">{position}</Text>
        </View>
        <View className="flex-row mt-3">
          <Button title="Edit" colours="bg-neutral-500 text-neutral-50" />
          <Button title="Delete" colours="bg-red-700 text-red-100" />
        </View>
      </View>
    </View>
  );
};

export default Employee;
