import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import InputField from "@/components/create/InputField";
import { BASE_URL } from "@/lib/config";
import CustomButton from "../auth/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmployeesData, Gender } from "@/lib/definitions";
import Radio from "@/components/create/Radio";
import NumberField from "@/components/create/NumberField";
import { z } from "zod";
import { router, useLocalSearchParams } from "expo-router";
import EditInput from "./EditInput";
import EditNumberField from "./EditNumberField";
import EditButton from "./EditButton";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  emailAddress: z.string().email(),
  physicalAddress: z.string(),
  phoneNumber: z.string(),
  emergencyPhoneNumber: z.string(),
  bankName: z.string(),
  bankAccountNumber: z.number(),
  accountName: z.string(),
  nextOfKinFullName: z.string(),
  nextOfKinPhoneNumber: z.string(),
  nextOfKinRelationship: z.string(),
  employmentRole: z.string(),
  employmentStartDate: z.string(),
  dateOfBirth: z.string(),
  educationalLevel: z.string(),
});

const EditForm = ({employee}: {employee: EmployeesData}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
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



  const submit = async (id: string) => {
    setIsLoading(true);
    try {

      const parsedFormData = formSchema.parse(formData);
      const value = await AsyncStorage.getItem("accessToken");
      const response = await fetch(`${BASE_URL}/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${value}`,
        },
        body: JSON.stringify(parsedFormData),
      });
      
      const data = await response.json();
      
      if (data.message) {
        setError(data.message);
        return;
      }

      setFormData(data);
      router.push('/employees')

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
            setFormData({...formData, firstName })
          } 
        />
        <EditInput
          title="Last name"
          value={employee.lastName}
          placeholder="Enter last name"
          defaultValue={employee.lastName}
          handleChangeText={(lastName: string) =>
            setFormData({...formData, lastName })}
     
        />
        <Radio
          options={[
            { label: Gender.MALE, value: Gender.MALE },
            { label: Gender.FEMALE, value: Gender.FEMALE },
          ]}
          checkedValue={gender}
          onChange={setGender}
        />
        <EditInput
          title="Email"
          value={formData.emailAddress}
          placeholder="Enter email"
          defaultValue={employee.emailAddress}
          handleChangeText={(emailAddress: string) => 
            setFormData({...formData, emailAddress })
          }
        />
        <EditInput
          title="Address"
          value={formData.physicalAddress}
          placeholder="Enter address"
          defaultValue={employee.physicalAddress}
          handleChangeText={(physicalAddress: string) =>
            setFormData({...formData, physicalAddress })
          }
        />
        <EditInput
          title="Phone number"
          value={formData.phoneNumber}
          placeholder="Enter phone number"
          defaultValue={employee.phoneNumber}
          handleChangeText={(phoneNumber: string) => 
            setFormData({...formData, phoneNumber })
          }
        />
        <EditInput
          title="Emergency phone number"
          value={formData.emergencyPhoneNumber}
          placeholder="Enter emergency phone number"
          defaultValue={employee.emergencyPhoneNumber}
          handleChangeText={(emergencyPhoneNumber: string) =>
            setFormData({...formData, emergencyPhoneNumber })
          }
        />
        <EditInput
          title="Bank name"
          value={formData.bankName}
          placeholder="Enter bank name"
          defaultValue={employee.bankName}
          handleChangeText={(bankName: string) =>
            setFormData({...formData, bankName })
          }
        />
        <EditNumberField
          title="Bank account number"
          value={formData.bankAccountNumber}
          placeholder="Enter bank account number"
          defaultValue={employee.bankAccountNumber}
          handleChangeText={(bankAccountNumber: number) =>
            setFormData({...formData, bankAccountNumber })
          }
        />
        <EditInput
          title="Bank account name"
          value={formData.accountName}
          placeholder="Enter bank account name"
          defaultValue={employee.accountName}
          handleChangeText={(accountName: string) =>
            setFormData({...formData, accountName })
          }
        />
        <EditInput
          title="Next of kin"
          value={formData.nextOfKinFullName}
          placeholder="Enter next of kine"
          defaultValue={employee.nextOfKinFullName}
          handleChangeText={(nextOfKinFullName: string) =>
            setFormData({...formData, nextOfKinFullName })
          }
        />
        <EditInput
          title="Next of kin number"
          value={formData.nextOfKinPhoneNumber}
          placeholder="Enter next of kin number"
          defaultValue={employee.nextOfKinPhoneNumber}
          handleChangeText={(nextOfKinPhoneNumber) => 
            setFormData({...formData, nextOfKinPhoneNumber })
          }
        />
        <EditInput
          title="Next of kin relationship"
          value={formData.nextOfKinRelationship}
          placeholder="Enter next of kin relationship"
          defaultValue={employee.nextOfKinRelationship}
          handleChangeText={(nextOfKinRelationship: string) => 
            setFormData({...formData, nextOfKinRelationship })
          }
        />
        <EditInput
          title="Position"
          value={formData.employmentRole}
          placeholder="Enter position"
          defaultValue={employee.employmentRole}
          handleChangeText={(employmentRole: string) =>
            setFormData({...formData, employmentRole })
          }
        />
        <EditInput
          title="Start date"
          value={formData.employmentStartDate}
          placeholder="Enter start date"
          defaultValue={employee.employmentStartDate}
          handleChangeText={(employmentStartDate: string) =>
            setFormData({...formData, employmentStartDate })
          }
        />
        <EditInput
          title="Date of birth"
          value={formData.dateOfBirth}
          placeholder="Enter date of birth"
          defaultValue={employee.dateOfBirth}
          handleChangeText={(dateOfBirth: string) =>
            setFormData({...formData, dateOfBirth })
          }
        />
        <EditInput
          title="Education level"
          value={formData.educationalLevel}
          placeholder="Enter education level"
          defaultValue={employee.educationalLevel}
          handleChangeText={(educationalLevel: string) =>
            setFormData({...formData, educationalLevel })
          }
        />
        <EditButton
          title={isLoading ? "Loading..." : "Edit employee"}
          handlePress={() => submit(employee._id)}
          containerStyles=""
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
};

export default EditForm;
