import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "../components/CustomText"
import { textStyles } from "../styles"
import Button from "../components/Button"
import Spacer from "../components/Spacer"
import Divider from "../components/Divider"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import PageLayout from "../components/PageLayout"
import { LogoHorizontal } from "../components/LogoHorizontal"

const InitialScreen = () => {
  const navigation = useTypedNavigation()

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <LogoHorizontal />
        <Spacer size={48} />
        <Text style={textStyles.boldText}>Let's start</Text>
        <Spacer size={30} />
        <Text style={textStyles.regularText}>Welcome to Hometrail.</Text>
        <Text style={textStyles.regularText}>
          To access more information and features please Sign In or create account.
        </Text>
        <Spacer size={20} />
        <Button type="outline" onPress={() => navigation.navigate("Welcome")}>
          Continue without sign in
        </Button>
        <Spacer size={20} />
        <Button type="primary" onPress={() => navigation.navigate("SignIn")}>
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
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
})

export default InitialScreen
