import { View, Text } from "react-native";
import React from "react";

const Error = ({error}: {error:string}) => {
  return (
    <View className="mt-4">
      <Text
        className={`text-neutral-500 text-center text-md ${
          error && "text-red-500"
        }`}
      >
        {error}
      </Text>
    </View>
  );
};

export default Error;
