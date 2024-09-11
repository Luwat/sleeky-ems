import { TouchableOpacity, Text } from "react-native";
import React, { PropsWithChildren } from "react";

const CustomButton = ({
  title,
  handlePress,
}: {
  title: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className="justify-center items-center bg-neutral-100 py-2 px-3 mt-3 rounded-lg "
    >
      <Text className="text-blue-950">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
