// App.tsx
import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LogoScreen from "./src/screens/LogoScreen"
import InitialScreen from "./src/screens/InitialScreen"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import { SafeAreaProvider } from "react-native-safe-area-context"
import SignInScreen from "./src/screens/SignInScreen"
import WelcomeScreen from "./src/screens/WelcomeScreen"
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen"
import { StatusBar } from "react-native"
import OnboardingScreen from "./src/screens/OnboardingScreen"

const Stack = createStackNavigator()

async function loadFonts() {
  await Font.loadAsync({
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
  })
}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
  }
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} showHideTransition={"fade"} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Logo"
          screenOptions={{
            headerShown: false, // we don't want to show a header navigation
          }}
        >
          <Stack.Screen name="Logo" component={LogoScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
