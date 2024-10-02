import Employee from "@/components/employees/Employee";
import EmployeesListHeader from "@/components/employees/EmployeesListHeader";
import NoEmployee from "@/components/employees/NoEmployee";
import Error from "@/components/Error";
import { BASE_URL } from "@/lib/config";
import { EmployeesData } from "@/lib/definitions";
import { useRefresh, useToken } from "@/lib/hooks";
import { fetchEmployees } from "@/lib/http";
import { Redirect } from "expo-router";
import { FlatList, RefreshControl, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR, { mutate } from "swr";


const EmployeesPage = () => {
  const {
    data: employees,
    error,
    isLoading,
    mutate
  } = useSWR(`${BASE_URL}/employees`, fetchEmployees);
  
  const { token } = useToken()
  
  if (token === undefined) {
    return <Redirect href="/" />
  }

  const {isRefreshing, onRefresh} = useRefresh(employees, mutate)
  
  return (
    <SafeAreaView className="h-full w-full bg-neutral-900 p-4">
      {isLoading && <Text className="text-neutral-100">Loading...</Text>}
      {error && <Error error={error.message} />}
      {employees && (
        <FlatList
          data={employees}
          keyExtractor={(employee: EmployeesData) => employee._id}
          renderItem={(employee) => (
            <Employee
              id={employee.item._id}
              firstName={employee.item.firstName}
              lastName={employee.item.lastName}
              position={employee.item.employmentRole}
            />
          )}
          ListHeaderComponent={() => <EmployeesListHeader />}
          ListEmptyComponent={() => <NoEmployee />}
          refreshing={isRefreshing}
          onRefresh={() => {
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default EmployeesPage;
