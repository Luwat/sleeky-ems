import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { BASE_URL } from "@/lib/config";
import { EmployeesData } from "@/lib/definitions";
import Radio from "@/components/create/Radio";
import EditInput from "./EditInput";
import EditNumberField from "./EditNumberField";
import EditButton from "./EditButton";
import useSWRMutation from "swr/mutation";
import { router } from "expo-router";
import { updateEmployee } from "@/lib/http";

const EditForm = ({ employee }: { employee: EmployeesData }) => {
  const { trigger, data, isMutating } = useSWRMutation(
    `${BASE_URL}/employees/${employee._id}`,
    updateEmployee
  );

  const [formData, setFormData] = useState<EmployeesData>({
    _id: employee._id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    gender: employee.gender,
    emailAddress: employee.emailAddress,
    physicalAddress: employee.physicalAddress,
    phoneNumber: employee.phoneNumber,
    emergencyPhoneNumber: employee.emergencyPhoneNumber,
    bankName: employee.bankName,
    bankAccountNumber: employee.bankAccountNumber,
    accountName: employee.accountName,
    nextOfKinFullName: employee.nextOfKinFullName,
    nextOfKinPhoneNumber: employee.nextOfKinPhoneNumber,
    nextOfKinRelationship: employee.nextOfKinRelationship,
    employmentRole: employee.employmentRole,
    employmentStartDate: employee.employmentStartDate,
    dateOfBirth: employee.dateOfBirth,
    educationalLevel: employee.educationalLevel,
  });

  const submit = async () => {
    try {
      const result = await trigger({
        ...data,
        _id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        gender: employee.gender,
        emailAddress: employee.emailAddress,
        physicalAddress: employee.physicalAddress,
        phoneNumber: employee.phoneNumber,
        emergencyPhoneNumber: employee.emergencyPhoneNumber,
        bankName: employee.bankName,
        bankAccountNumber: employee.bankAccountNumber,
        accountName: employee.accountName,
        nextOfKinFullName: employee.nextOfKinFullName,
        nextOfKinPhoneNumber: employee.nextOfKinPhoneNumber,
        nextOfKinRelationship: employee.nextOfKinRelationship,
        employmentRole: employee.employmentRole,
        employmentStartDate: employee.employmentStartDate,
        dateOfBirth: employee.dateOfBirth,
        educationalLevel: employee.educationalLevel,
      });
      if (result) {
        result
        router.push('/employees')
      }
    } catch (e) {
      console.log(e);
      return;
    }
  };

  return (
    <View className="mb-24">
      <View className="p-8 h-15">
        <Text className="text-xl text-neutral-100">
          Enter employee's details
        </Text>
      </View>
      <ScrollView className="px-6 bg-neutral-800">
        <EditInput
          title="First name"
          value={formData.firstName}
          placeholder="Enter first name"
          defaultValue={employee.firstName}
          handleChangeText={(firstName: string) =>
            setFormData({ ...formData, firstName })
          }
        />
        <EditInput
          title="Last name"
          value={employee.lastName}
          placeholder="Enter last name"
          defaultValue={employee.lastName}
          handleChangeText={(lastName: string) =>
            setFormData({ ...formData, lastName })
          }
        />
        <Radio
          options={[
            { label: "MALE", value: "MALE" },
            { label: "FEMALE", value: "FEMALE" },
          ]}
          checkedValue={formData.gender}
          onChange={(gender: string) => setFormData({ ...formData, gender })}
        />
        <EditInput
          title="Email"
          value={formData.emailAddress}
          placeholder="Enter email"
          defaultValue={employee.emailAddress}
          handleChangeText={(emailAddress: string) =>
            setFormData({ ...formData, emailAddress })
          }
        />
        <EditInput
          title="Address"
          value={formData.physicalAddress}
          placeholder="Enter address"
          defaultValue={employee.physicalAddress}
          handleChangeText={(physicalAddress: string) =>
            setFormData({ ...formData, physicalAddress })
          }
        />
        <EditInput
          title="Phone number"
          value={formData.phoneNumber}
          placeholder="Enter phone number"
          defaultValue={employee.phoneNumber}
          handleChangeText={(phoneNumber: string) =>
            setFormData({ ...formData, phoneNumber })
          }
        />
        <EditInput
          title="Emergency phone number"
          value={formData.emergencyPhoneNumber}
          placeholder="Enter emergency phone number"
          defaultValue={employee.emergencyPhoneNumber}
          handleChangeText={(emergencyPhoneNumber: string) =>
            setFormData({ ...formData, emergencyPhoneNumber })
          }
        />
        <EditInput
          title="Bank name"
          value={formData.bankName}
          placeholder="Enter bank name"
          defaultValue={employee.bankName}
          handleChangeText={(bankName: string) =>
            setFormData({ ...formData, bankName })
          }
        />
        <EditNumberField
          title="Bank account number"
          value={formData.bankAccountNumber}
          placeholder="Enter bank account number"
          defaultValue={employee.bankAccountNumber}
          handleChangeText={(bankAccountNumber: number) =>
            setFormData({ ...formData, bankAccountNumber })
          }
        />
        <EditInput
          title="Bank account name"
          value={formData.accountName}
          placeholder="Enter bank account name"
          defaultValue={employee.accountName}
          handleChangeText={(accountName: string) =>
            setFormData({ ...formData, accountName })
          }
        />
        <EditInput
          title="Next of kin"
          value={formData.nextOfKinFullName}
          placeholder="Enter next of kine"
          defaultValue={employee.nextOfKinFullName}
          handleChangeText={(nextOfKinFullName: string) =>
            setFormData({ ...formData, nextOfKinFullName })
          }
        />
        <EditInput
          title="Next of kin number"
          value={formData.nextOfKinPhoneNumber}
          placeholder="Enter next of kin number"
          defaultValue={employee.nextOfKinPhoneNumber}
          handleChangeText={(nextOfKinPhoneNumber) =>
            setFormData({ ...formData, nextOfKinPhoneNumber })
          }
        />
        <EditInput
          title="Next of kin relationship"
          value={formData.nextOfKinRelationship}
          placeholder="Enter next of kin relationship"
          defaultValue={employee.nextOfKinRelationship}
          handleChangeText={(nextOfKinRelationship: string) =>
            setFormData({ ...formData, nextOfKinRelationship })
          }
        />
        <EditInput
          title="Position"
          value={formData.employmentRole}
          placeholder="Enter position"
          defaultValue={employee.employmentRole}
          handleChangeText={(employmentRole: string) =>
            setFormData({ ...formData, employmentRole })
          }
        />
        <EditInput
          title="Start date"
          value={formData.employmentStartDate}
          placeholder="Enter start date"
          defaultValue={employee.employmentStartDate}
          handleChangeText={(employmentStartDate: string) =>
            setFormData({ ...formData, employmentStartDate })
          }
        />
        <EditInput
          title="Date of birth"
          value={formData.dateOfBirth}
          placeholder="Enter date of birth"
          defaultValue={employee.dateOfBirth}
          handleChangeText={(dateOfBirth: string) =>
            setFormData({ ...formData, dateOfBirth })
          }
        />
        <EditInput
          title="Education level"
          value={formData.educationalLevel}
          placeholder="Enter education level"
          defaultValue={employee.educationalLevel}
          handleChangeText={(educationalLevel: string) =>
            setFormData({ ...formData, educationalLevel })
          }
        />
        <EditButton
          title={isMutating ? "Loading..." : "Edit employee"}
          handlePress={submit}
          containerStyles=""
          isLoading={isMutating}
        />
      </ScrollView>
    </View>
  );
};

export default EditForm;
