import Employee from "@/components/employees/Employee";
import EmployeesListHeader from "@/components/employees/EmployeesListHeader";
import NoEmployee from "@/components/employees/NoEmployee";
import Error from "@/components/Error";
import { BASE_URL } from "@/lib/config";
import { EmployeesData } from "@/lib/definitions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmployeesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        const accessToken = await AsyncStorage.getItem("accessToken");
        const response = await fetch(`${BASE_URL}/employees`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          setError("Failed to fetch employees");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <SafeAreaView className="h-full w-full bg-neutral-950 p-4">
      {isLoading && <Text className="text-neutral-100">Loading...</Text>}
      {error && <Error error={error}/>}
      {!isLoading && <FlatList
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
      />}
    </SafeAreaView>
  );
};

export default EmployeesPage;
