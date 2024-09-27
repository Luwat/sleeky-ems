import { View, Text } from "react-native";
import { Link } from "expo-router";

const AuthDecide = ({
  ask,
  title,
  href,
}: {
  ask: string;
  title: string;
  href: "/sign-up" | "/sign-in";
}) => {
  return (
    <View>
      <Text className="text-neutral-500 text-center text-lg mt-3">
        {`${ask} `}
        <Link href={href} className="text-orange-500">
          {title}
        </Link>
      </Text>
    </View>
  );
};

export default AuthDecide;
