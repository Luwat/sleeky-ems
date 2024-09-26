import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateForm from '@/components/create/CreateForm'

const Create = () => {
  return (
    <SafeAreaView className="bg-neutral-900 h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <CreateForm />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})

