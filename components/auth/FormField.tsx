import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";

interface FormInputGroups {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (event: string) => void;
}

type CustomInputGroups = TextInputProps & FormInputGroups;

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}: CustomInputGroups) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <View className="space-y-2 mt-7">
        <Text className="text-base text-neutral-100">{title}</Text>
        <View className="w-full border-neutral-600 border-2 focus:border-neutral-400 justify-center h-16 my-4 rounded-2xl bg-neutral-700 flex-row">
          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#fafafa"}
            onChangeText={handleChangeText}
            className="flex-1 pl-2 text-xl text-neutral-50"
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />
          {title === "Password" && (
            <TouchableOpacity
              className="flex items-center justify-center mr-2"
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Ionicons name="eye-off-outline" size={24} color="#fafafa" />
              ) : (
                <Ionicons name="eye-outline" size={24} color="#fafafa" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default FormField;
