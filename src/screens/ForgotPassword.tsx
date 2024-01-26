import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native"
import Button from "../components/Button"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import { Text } from "../components/CustomText"
import PageLayout from "../components/PageLayout"
import MultiEnvironmentSvg from "../components/MultiEnvironmentSvg"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [processComplete, setProcessComplete] = useState(false)
  const [emailError, setEmailError] = useState("")

  const navigation = useTypedNavigation()

  const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleForgotPassword = () => {
    // Clear previous errors
    setEmailError("")

    // Validate email
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // if email is valid we're all good, show success graphics
    setProcessComplete(true)
  }

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[textStyles.boldText]}>Forgot password</Text>
          <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={textStyles.regularText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <Spacer size={39} />

        {processComplete ? (
          <>
            <Text style={textStyles.regularText}>We sent you a password reset link to your email {email}.</Text>

            <Spacer size={94} />

            <MultiEnvironmentSvg
              // TODO: this friggin image is not responsive
              style={{ width: 309, height: 273, alignSelf: "center" }}
              src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781258/u0nrccwbzlu1gbav0aw0.svg"}
            />

            <Spacer size={94} />

            <TouchableOpacity
              onPress={() => {
                Alert.alert("Coming Soon!", "This feature will be available in future updates.", [{ text: "OK" }], {
                  cancelable: true,
                })
              }}
            >
              <Text style={[textStyles.regularText, styles.forgotPassword]}>Didn't receive email?</Text>
            </TouchableOpacity>

            <Spacer size={40} />

            <Button type="outline" onPress={() => navigation.navigate("SignIn")}>
              Back to sign in
            </Button>
          </>
        ) : (
          <>
            <Text style={textStyles.regularText}>
              We will send you a email with a password reset link to reset your password. Please add the email address
              linked to your hometrail account.
            </Text>

            <Spacer size={30} />

            <UserInput
              label="Email address"
              keyboardType="email-address"
              placeholder="E.g. 1234@hometrail.com"
              value={email}
              onChangeText={setEmail}
              error={emailError}
            />
            <Button type="primary" onPress={handleForgotPassword}>
              Send
            </Button>
          </>
        )}
      </View>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
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

export default ForgotPassword
