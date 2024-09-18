import { View, Text } from "react-native";
import Button from "./Button";
import React from "react";

const NoEmployee = () => {
  return (
      <View className='flex-1 justify-center items-center'>
        <Text className="text-neutral-100 m-4">There are no employees yet.</Text>
        <Button
          title="Add Employee"
          colours="bg-blue-700 text-blue-100"
        ></Button>
      </View>
  );
};

export default NoEmployee;
