import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import InputField from "./InputField";
import { BASE_URL } from "@/lib/config";
import CustomButton from "../auth/CustomButton";
import { EmployeesData } from "@/lib/definitions";
import Radio from "./Radio";
import NumberField from "./NumberField";
import { router } from "expo-router";
import useSWRMutation from "swr/mutation";
import { createEmployees } from "@/lib/http";


const CreateForm = () => {
  const {
    data,
    trigger,
    isMutating: isLoading,
  } = useSWRMutation(`${BASE_URL}/employees`, createEmployees);
  const [formData, setFormData] = useState<EmployeesData>({
    _id: "",
    firstName: "",
    lastName: "",
    gender: "",
    emailAddress: "",
    physicalAddress: "",
    phoneNumber: "",
    emergencyPhoneNumber: "",
    bankName: "",
    bankAccountNumber: 0,
    accountName: "",
    nextOfKinFullName: "",
    nextOfKinPhoneNumber: "",
    nextOfKinRelationship: "",
    employmentRole: "",
    employmentStartDate: "",
    dateOfBirth: "",
    educationalLevel: "",
  });

  const submit = async () => {
    try {
      const result = await trigger({
        ...data,
        _id: formData._id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        emailAddress: formData.emailAddress,
        physicalAddress: formData.physicalAddress,
        phoneNumber: formData.phoneNumber,
        emergencyPhoneNumber: formData.emergencyPhoneNumber,
        bankName: formData. bankName,        
        bankAccountNumber: formData.bankAccountNumber,
        accountName: formData.accountName,
        nextOfKinFullName: formData.nextOfKinFullName,
        nextOfKinPhoneNumber: formData.nextOfKinPhoneNumber,
        nextOfKinRelationship: formData.nextOfKinRelationship,
        employmentRole: formData.employmentRole,
        employmentStartDate:formData.employmentStartDate,
        dateOfBirth: formData. dateOfBirth,
        educationalLevel: formData.educationalLevel,
      });
      if (result) {
        result
        router.push('/employees')
      }
    } catch (error) {
      console.log(error);
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
        <InputField
          title="First name"
          value={formData.firstName}
          placeholder="Enter first name"
          handleChangeText={(firstName: string) =>
            setFormData({ ...data, firstName })
          }
        />
        <InputField
          title="Last name"
          value={formData.lastName}
          placeholder="Enter last name"
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
          onChange={(gender: string) => 
            setFormData({...formData, gender })
          }
        />
        <InputField
          title="Email"
          value={formData.emailAddress}
          placeholder="Enter email"
          handleChangeText={(emailAddress: string) =>
            setFormData({ ...formData, emailAddress })
          }
        />
        <InputField
          title="Address"
          value={formData.physicalAddress}
          placeholder="Enter address"
          handleChangeText={(physicalAddress: string) =>
            setFormData({ ...formData, physicalAddress })
          }
        />
        <InputField
          title="Phone number"
          value={formData.phoneNumber}
          placeholder="Enter phone number"
          handleChangeText={(phoneNumber: string) =>
            setFormData({ ...formData, phoneNumber })
          }
        />
        <InputField
          title="Emergency phone number"
          value={formData.emergencyPhoneNumber}
          placeholder="Enter emergency phone number"
          handleChangeText={(emergencyPhoneNumber: string) =>
            setFormData({ ...formData, emergencyPhoneNumber })
          }
        />
        <InputField
          title="Bank name"
          value={formData.bankName}
          placeholder="Enter bank name"
          handleChangeText={(bankName: string) =>
            setFormData({ ...formData, bankName })
          }
        />
        <NumberField
          title="Bank account number"
          value={formData.bankAccountNumber}
          placeholder="Enter bank account number"
          handleChangeText={(bankAccountNumber: number) =>
            setFormData({ ...formData, bankAccountNumber })
          }
        />
        <InputField
          title="Bank account name"
          value={formData.accountName}
          placeholder="Enter bank account name"
          handleChangeText={(accountName: string) =>
            setFormData({ ...formData, accountName })
          }
        />
        <InputField
          title="Next of kin"
          value={formData.nextOfKinFullName}
          placeholder="Enter next of kine"
          handleChangeText={(nextOfKinFullName: string) =>
            setFormData({ ...formData, nextOfKinFullName })
          }
        />
        <InputField
          title="Next of kin number"
          value={formData.nextOfKinPhoneNumber}
          placeholder="Enter next of kin number"
          handleChangeText={(nextOfKinPhoneNumber: string) =>
            setFormData({ ...formData, nextOfKinPhoneNumber })
          }
        />
        <InputField
          title="Next of kin relationship"
          value={formData.nextOfKinRelationship}
          placeholder="Enter next of kin relationship"
          handleChangeText={(nextOfKinRelationship: string) =>
            setFormData({ ...formData, nextOfKinRelationship })
          }
        />
        <InputField
          title="Position"
          value={formData.employmentRole}
          placeholder="Enter position"
          handleChangeText={(employmentRole: string) =>
            setFormData({ ...formData, employmentRole })
          }
        />
        <InputField
          title="Start date"
          value={formData.employmentStartDate}
          placeholder="Enter start date"
          handleChangeText={(employmentStartDate: string) =>
            setFormData({ ...formData, employmentStartDate })
          }
        />
        <InputField
          title="Date of birth"
          value={formData.dateOfBirth}
          placeholder="Enter date of birth"
          handleChangeText={(dateOfBirth: string) =>
            setFormData({ ...formData, dateOfBirth })
          }
        />
        <InputField
          title="Education level"
          value={formData.educationalLevel}
          placeholder="Enter education level"
          handleChangeText={(educationalLevel: string) =>
            setFormData({ ...formData, educationalLevel })
          }
        />
        <CustomButton
          title={isLoading ? "Loading..." : "Add employee"}
          handlePress={submit}
          containerStyles=""
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
};

export default CreateForm;
