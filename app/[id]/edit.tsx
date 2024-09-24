import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditForm from '@/components/employees/EditForm'
import { useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '@/lib/config'
import { EmployeesData } from '@/lib/definitions'

const Edit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [employee, setEmployee] = useState([]);
  
  const id = useLocalSearchParams().id
  console.log(id)

  useEffect(() => {
    const fetchEmployee = async (id:  string | string[]) => {
      try {
        setIsLoading(true);
        const value = await AsyncStorage.getItem("accessToken");
        const response = await fetch(`${BASE_URL}/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${value}`,
          },
        });
        const data = await response.json();

        if (data.message) {
          setError(data.message);
          return;
        }

        setEmployee(data);

        console.log(data);
      } catch(error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchEmployee(id)

  }, [])
  return (
    <SafeAreaView className='bg-neutral-900 pb-20'>
      <EditForm employee={employee}/>
    </SafeAreaView>
  )
}

export default Edit