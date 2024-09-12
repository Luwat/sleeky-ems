import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles
}: {
  title: string;
  handlePress: () => void;
  containerStyles: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`justify-center items-center bg-neutral-100 py-4  rounded-2xl ${containerStyles}`}
    >
      <Text className="text-blue-950 text-2xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
