import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import InputField from "./InputField";
import { BASE_URL } from "@/lib/config";
import CustomButton from "../auth/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmployeesData, Gender } from "@/lib/definitions";
import Radio from "./Radio";

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [gender, setGender] = useState("")
  const [formData, setFormData] = useState<EmployeesData>({
    firstName: "",
    lastName: "",
    gender: Gender.MALE,
    emailAddress: "",
    physicalAddress: "",
    phoneNumber: "",
    emergencyPhoneNumber: "",
    bankName: "",
    bankAccountNumber: "",
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
    setIsLoading(true);

    try {
      console.log(formData)
      const value = await AsyncStorage.getItem('accessToken') 
      const response = await fetch(`${BASE_URL}/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${value}`,
        },
        body: JSON.stringify(formData),
      });
      if (value) {
        console.log(value)
      } 
      const data = await response.json();
      
      if (data.message) {
        console.log(data.message);
        console.log(data.error);
        setError(data.message);
        return;
      }

      console.log(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
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
            setFormData({ ...formData, firstName })
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
        {/* <InputField
          title="Gender"
          value={formData.gender}
          placeholder="Enter last name"
          handleChangeText={(gender: Gender) =>
            setFormData({ ...formData, gender })
          }
        /> */}
        <Radio options={[
          {label: Gender.MALE, value: Gender.MALE },
          {label: Gender.FEMALE, value: Gender.FEMALE },
        ]}
        checkedValue={gender}
        onChange={setGender}
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
        <InputField
          title="Bank account number"
          value={formData.bankAccountNumber}
          placeholder="Enter bank account number"
          handleChangeText={(bankAccountNumber: string) =>
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
        <CustomButton title={isLoading ? "Loading..." : "Add employee"} handlePress={submit} containerStyles="" isLoading={isLoading}/>
      </ScrollView>
    </View>
  );
};

export default CreateForm;
