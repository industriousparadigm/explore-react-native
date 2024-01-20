import React from "react"
import { View, TouchableOpacity, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text } from "../components/CustomText"
import { textStyles } from "../styles"
import Button from "../components/Button"
import Spacer from "../components/Spacer"
import { SafeAreaView } from "react-native-safe-area-context"
import Divider from "../components/Divider"
import { RootStackParamList } from "../types"

const InitialScreen = () => {
  const navigation = useNavigation<any>()

  const handleLogin = () => {
    // Your login logic here
    console.log("Login successful")
    // Navigate to the success screen, etc.
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image source={require("../../assets/images/logo-horizontal.png")} style={styles.logoHorizontal} />
        <Spacer size={48} />
        <Text style={textStyles.boldText}>Let's start</Text>
        <Spacer size={30} />
        <Text style={textStyles.regularText}>Welcome to Hometrail.</Text>
        <Text style={textStyles.regularText}>
          To access more information and features please Sign In or create account.
        </Text>
        <Spacer size={20} />
        <Button type="outline">Continue without sign in</Button>
        <Spacer size={20} />
        <Button onPress={() => navigation.navigate("SignIn")} type="primary">
          Sign in
        </Button>
        <Spacer size={20} />
        <Divider />
        <Spacer size={20} />
        <Button type="secondary">Create account</Button>
        <Spacer size={20} />
        <Button type="outline" icon="apple">
          Continue with Apple
        </Button>
        <Spacer size={20} />
        <Button type="outline" icon="google">
          Continue with Google
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  logoHorizontal: {
    width: 211,
    height: 38,
    resizeMode: "contain",
  },
})

export default InitialScreen
