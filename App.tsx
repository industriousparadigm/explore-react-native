import React, { useCallback, useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginOptions from "./src/screens/LoginOptions"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { SafeAreaProvider } from "react-native-safe-area-context"
import SignIn from "./src/screens/SignIn"
import Welcome from "./src/screens/Welcome"
import ForgotPassword from "./src/screens/ForgotPassword"
import { StatusBar, StyleSheet, View } from "react-native"
import Onboarding from "./src/screens/Onboarding"
import CreateAccount from "./src/screens/CreateAccount"
import VerifyAccount from "./src/screens/VerifyAccount"
import { RootStackParamList } from "./src/types"
import Discover from "./src/screens/Discover"

const Stack = createStackNavigator<RootStackParamList>()

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // pre app load operations: fonts, api calls
        await Font.loadAsync({
          "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
          "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return <View style={styles.splash}></View>
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar barStyle={"light-content"} showHideTransition={"fade"} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false, // we don't want to show a header navigation
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="LoginOptions" component={LoginOptions} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  splash: { width: "100%", height: "100%", backgroundColor: "limegreen" },
})

export default App
