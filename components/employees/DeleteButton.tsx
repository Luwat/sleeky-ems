import { Text, Pressable, View } from "react-native";
import { BASE_URL } from "@/lib/config";
import Error from "../Error";
import useSWRMutation from "swr/mutation";
import { deleteEmployee } from "@/lib/http";

const DeleteButton = ({ id }: { id: string }) => {
  const { trigger, error, isMutating } = useSWRMutation(
    `${BASE_URL}/employees/${id}`,
    deleteEmployee
  );

  const submit = async () => {
    trigger();
  };

  return (
    <View>
      {error && <Error error={error} />}
      <Pressable onPress={submit}>
        <Text
          className={`py-2 px-4 rounded-md ${
            isMutating ? "bg-red-900 text-red-200" : "bg-red-700 text-red-100"
          }`}
        >{`${isMutating ? "Deleting..." : "Delete"}`}</Text>
      </Pressable>
    </View>
  );
};

export default DeleteButton;
