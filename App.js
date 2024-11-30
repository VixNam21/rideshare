import { View, Text } from 'react-native'
import React from 'react'
import AppStack from './navigation/AppStack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
        <AppStack/>
    </SafeAreaProvider>
  )
}

export default App