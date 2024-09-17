import { View, Text } from "react-native";
import React from "react";

const EmployeesListHeader = () => {
  return (
    <View className="my-6 px-4 spacey-6">
      <View className="justify-center items-start flex-row mb-6">
        <View>
          <Text className="text-neutral-100 text-3xl font-bold">
            Sleeky Employees
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmployeesListHeader;
