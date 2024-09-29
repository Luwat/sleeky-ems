import { Link } from "expo-router";
import {Text, Pressable } from "react-native";

const Button = ({ id, pathname, title, colours }: { id: string; pathname: "/[id]" | "/[id]/edit"; title: string; colours: string }) => {
  return (
    <Link href={{pathname: pathname, params: {id}}} className="mx-2" asChild>
      <Pressable>
        <Text className={`py-2 px-4 rounded-md ${colours}`}>{title}</Text>
      </Pressable>
    </Link>
  );
};

export default Button;
