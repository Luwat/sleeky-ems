import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import React from "react";

type options = {
  label: string;
  value: string;
};

const Radio = ({
  options,
  checkedValue,
  onChange,
}: {
  options: options[];
  checkedValue: string;
  onChange: (event: string) => void;
}) => {
  return (
    <View className="gap-x-5 p-4 my-5 items-center flex-row bg-neutral-700 rounded-2xl">
      {options.map((option) => {
        let isActive = checkedValue === option.value;

        return (
          <TouchableOpacity
            
            key={option.value}
            onPress={() => {
                console.log(option.value);
              onChange(option.value);
            }}
          >
            <MaterialIcons name={`${isActive ? "radio-button-checked" : "radio-button-unchecked"}`} size={28} color={`${isActive ? "#06b6d4" : "#64748b"}`}/>
            <Text className="text-neutral-100">{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Radio;
