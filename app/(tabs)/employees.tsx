import Employee from "@/components/employees/Employee";
import EmployeesListHeader from "@/components/employees/EmployeesListHeader";
import { EMPLOYEES } from "@/lib/constants";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmployeesPage = () => {
  return (
    <SafeAreaView className="h-full w-full bg-neutral-950 p-4">
      <FlatList
        data={EMPLOYEES}
        keyExtractor={(employee) => employee.id}
        renderItem={(employee) => (
          <Employee
            firstName={employee.item.firstName}
            lastName={employee.item.lastName}
            position={employee.item.position}
          />
        )}
        ListHeaderComponent={() => <EmployeesListHeader />}
      />
    </SafeAreaView>
  );
};

export default EmployeesPage;
