import { EMPLOYEES } from '@/lib/constants'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const EmployeesPage = () => {
  return (
    <SafeAreaView className='h-full w-full bg-neutral-950 p-4'>
      <FlatList
        data={EMPLOYEES}
        keyExtractor={(employee) => employee.id.toString()}
        renderItem={(employee) => (
          <View className='text-neutral-100 my-5'>
            <Text className='text-neutral-100'>{employee.item.firstName}</Text>
            <Text className='text-neutral-100'>{employee.item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default EmployeesPage

const styles = StyleSheet.create({})