import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button } from 'react-native'

const index = () => {
  const router = useRouter()
  return (
    <View>
      <Text>index</Text>
      <Button title="Go to dashboard" onPress={() => router.replace('/dashbord')} />
    </View>
  )
}

export default index