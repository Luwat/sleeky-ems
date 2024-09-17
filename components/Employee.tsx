import { View, Text } from "react-native";
import React from "react";

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
    <View>
      <View>
        <Text>Full name: {lastName} {firstName}</Text>
        <Text>{position}</Text>
      </View>
    </View>
  );
};

export default Employee;
