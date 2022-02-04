import React from 'react'
import { ActivityIndicator } from 'react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home'

export default function App() {
  const [loadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!loadFonts) {
    return <ActivityIndicator />
  }
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
