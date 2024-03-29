import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native"
import Button from "../components/Button"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Divider from "../components/Divider"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import { Text } from "../components/CustomText"
import PageLayout from "../components/PageLayout"
import { isValidEmail } from "../utils"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigation = useTypedNavigation()

  const handleSignIn = () => {
    // Clear previous errors
    setEmailError("")
    setPasswordError("")

    // Validate email
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Mock credentials check
    if (email !== "user@me.com" || password !== "12345") {
      setPasswordError("Incorrect email or password")
      return
    }

    navigation.navigate("Welcome")
  }

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[textStyles.boldText]}>Sign in</Text>
          <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={textStyles.regularText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={39} />
        <UserInput
          label="Email address"
          keyboardType="email-address"
          placeholder="E.g. 1234@hometrail.com"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />
        <UserInput
          label="Password"
          placeholder="Your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={passwordError}
        />
        <Button type="primary" onPress={handleSignIn}>
          Sign In
        </Button>
        <Spacer size={30} />
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Coming Soon!", "This feature will be available in future updates.", [{ text: "OK" }], {
              cancelable: true,
            })
          }}
        >
          <Text
            style={[textStyles.regularText, styles.forgotPassword]}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <Divider />
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
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cancel: {
    position: "absolute",
    right: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
  forgotPassword: {
    color: "#4A90E2",
  },
})

export default SignIn
