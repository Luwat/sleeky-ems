import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import InputField from "./InputField";
import { BASE_URL } from "@/lib/config";
import CustomButton from "../auth/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    emergencyPhoneNumber: "",
    bankName: "",
    bankAccountNumber: "",
    bankAccountName: "",
    nextOfKin: "",
    nextOfKinNumber: "",
    nextOfKinRelationship: "",
    position: "",
    startDate: "",
    dateOfBirth: "",
    educationLevel: "",
  });

  const submit = async () => {
    setIsLoading(true);

    try {
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
        <InputField
          title="Email"
          value={formData.email}
          placeholder="Enter email"
          handleChangeText={(email: string) =>
            setFormData({ ...formData, email })
          }
        />
        <InputField
          title="Address"
          value={formData.address}
          placeholder="Enter address"
          handleChangeText={(address: string) =>
            setFormData({ ...formData, address })
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
          value={formData.bankAccountName}
          placeholder="Enter bank account name"
          handleChangeText={(bankAccountName: string) =>
            setFormData({ ...formData, bankAccountName })
          }
        />
        <InputField
          title="Next of kin"
          value={formData.nextOfKin}
          placeholder="Enter next of kine"
          handleChangeText={(nextOfKin: string) =>
            setFormData({ ...formData, nextOfKin })
          }
        />
        <InputField
          title="Next of kin number"
          value={formData.nextOfKinNumber}
          placeholder="Enter next of kin number"
          handleChangeText={(nextOfKinNumber: string) =>
            setFormData({ ...formData, nextOfKinNumber })
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
          value={formData.position}
          placeholder="Enter position"
          handleChangeText={(position: string) =>
            setFormData({ ...formData, position })
          }
        />
        <InputField
          title="Start date"
          value={formData.startDate}
          placeholder="Enter start date"
          handleChangeText={(startDate: string) =>
            setFormData({ ...formData, startDate })
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
          value={formData.educationLevel}
          placeholder="Enter education level"
          handleChangeText={(educationLevel: string) =>
            setFormData({ ...formData, educationLevel })
          }
        />
        <CustomButton title="Add employee" handlePress={submit} containerStyles="" isLoading={isLoading}/>
      </ScrollView>
    </View>
  );
};

export default CreateForm;
