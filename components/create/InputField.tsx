import { View, Text, TextInput, TextInputProps } from 'react-native';

interface FormInputGroups {
    title: string;
    value: string;
    placeholder: string;
    placeholderTextColor?: string;
    handleChangeText: (event: string) => void;
  }
  
  type CustomInputGroups = TextInputProps & FormInputGroups;

const InputField = ({title, value, placeholder, placeholderTextColor = "#fafafa", handleChangeText, ...props}: CustomInputGroups) => {
  return (
    <View className="space-y-2 mt-7">
        <Text className="text-base text-neutral-100">{title}</Text>
        <View className="w-full border-neutral-600 focus:border-neutral-400 justify-center h-14 my-4 rounded-2xl bg-neutral-700 flex-row">
          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={handleChangeText}
            className="flex-1 pl-4 text-xs text-neutral-50"
            {...props}
          />
        </View>
      </View>
  )
}

export default InputField