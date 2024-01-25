import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Alert, TextInput } from "react-native"
import Button from "../components/Button"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import { Text } from "../components/CustomText"
import PageLayout from "../components/PageLayout"

const CreateAccount = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("+44")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameError, setNameError] = useState("")
  const [surnameError, setSurnameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const navigation = useTypedNavigation()

  const handleCreateAccount = () => {
    // Clear previous errors
    setNameError("")
    setSurnameError("")
    setEmailError("")
    setPhoneError("")
    setPasswordError("")
    setConfirmPasswordError("")

    // Perform your validation checks here
    // ...

    // If everything is valid, navigate to the next screen or perform the account creation logic
    navigation.navigate("Welcome")
  }

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[textStyles.boldText]}>Create account</Text>
          <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={textStyles.regularText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={39} />
        <UserInput label="Name" placeholder="Your first name" value={name} onChangeText={setName} error={nameError} />
        <UserInput
          label="Surname"
          placeholder="Your family name"
          value={surname}
          onChangeText={setSurname}
          error={surnameError}
        />
        <UserInput
          label="Email address"
          placeholder="Your email address"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />
        <View style={styles.inlineInputs}>
          <UserInput
            // style={styles.countryCode}
            value={countryCode}
            onChangeText={setCountryCode}
            // You might want a picker or modal to select country codes
          />
          <UserInput
            // style={styles.phoneNumber}
            placeholder="123456789"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={phoneError}
            keyboardType="phone-pad"
          />
        </View>
        <UserInput
          label="Password"
          secureTextEntry
          placeholder="At least 8 characters, 1 symbol, 1 number"
          value={password}
          onChangeText={setPassword}
          error={passwordError}
        />
        <UserInput
          label="Confirm password"
          secureTextEntry
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          error={confirmPasswordError}
        />
        <Button type="primary" onPress={handleCreateAccount}>
          Create Account
        </Button>
        {/* Add more content or additional buttons if needed */}
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
  inlineInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryCode: {
    flex: 1,
    marginRight: 8, // Adjust the spacing based on your design
  },
  phoneNumber: {
    flex: 3,
  },
  // Add other styles for your input fields and error messages
})

export default CreateAccount
