import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Alert } from "react-native"
import Button from "../components/Button" // Adjust the path as needed
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Divider from "../components/Divider"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import { Text } from "../components/CustomText"

const SignInScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigation = useTypedNavigation()

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleSignIn = () => {
    // Clear previous errors
    setEmailError("")
    setPasswordError("")

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Mock credentials check
    if (email !== "user@me.com" || password !== "12345") {
      setPasswordError("Incorrect email or password")
      return
    }

    // Navigate to Home screen if credentials are correct
    navigation.navigate("Welcome")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
          type="email"
          placeholder="E.g. 1234@hometrail.com"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />
        <UserInput
          label="Password"
          type="password"
          placeholder="Your password"
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
            Alert.alert(
              "Coming Soon!", // Title of the alert
              "This feature will be available in future updates.", // Message of the alert
              [
                {
                  text: "OK", // The text on the button
                  onPress: () => console.log("OK Pressed"), // Optional press handler
                },
              ],
              { cancelable: true }, // If pressing outside the alert dismisses it
            )
          }}
        >
          <Text style={[textStyles.regularText, styles.forgotPassword]}>Forgot password?</Text>
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
    </SafeAreaView>
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
  // Add styles for any other elements as needed
})

export default SignInScreen
