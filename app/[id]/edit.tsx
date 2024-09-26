import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditForm from "@/components/employees/EditForm";
import { useLocalSearchParams } from "expo-router";
import { BASE_URL } from "@/lib/config";
import useSWR from "swr";
import { fetchEmployee } from "@/lib/http";
import Error from "@/components/Error";

const Edit = () => {
  const id = useLocalSearchParams().id;
  const {
    data: employee,
    error,
    isLoading,
  } = useSWR(`${BASE_URL}/employees/${id}`, fetchEmployee);
  return (
    <SafeAreaView className="bg-neutral-900 pb-20">
      {error && <Error error={error} />}
      {isLoading ? (
        <Text className="text-neutral-100">Loading...</Text>
      ) : (
        employee && <EditForm employee={employee} />
      )}
    </SafeAreaView>
  );
};

export default Edit;
