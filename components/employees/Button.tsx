import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ title, colours }: { title: string; colours: string }) => {
  return (
    <View className="mx-2">
      <TouchableOpacity>
        <Text className={`py-2 px-4 rounded-md ${colours}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
