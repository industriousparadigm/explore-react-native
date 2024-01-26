import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Alert, TextInput } from "react-native"
import Button from "../components/Button"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import { Text } from "../components/CustomText"
import PageLayout from "../components/PageLayout"
import { CountryPicker } from "react-native-country-codes-picker"
import { isValidCountryCode, isValidEmail, isValidPassword, isValidPhoneNumber } from "../utils"

const CreateAccount = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("+44")
  const [showCountryPicker, setShowCountryPicker] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameError, setNameError] = useState("")
  const [surnameError, setSurnameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [countryCodeError, setCountryCodeError] = useState("")
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

    const completePhoneNumber = phoneNumber ? countryCode + " " + phoneNumber : ""

    // TODO DELETE THIS (or use it for development to bypass checks)
    // navigation.navigate("VerifyAccount", {
    //   email: email || "sample@email.com",
    //   phoneNumber: completePhoneNumber || "+351 214710054",
    // })
    // return

    // cover the case of any error while not returning early
    let error = false

    // validation checks
    if (!name) {
      setNameError("Enter your first name")
      error = true
    }

    if (!surname) {
      setSurnameError("Enter your family name")
      error = true
    }

    if (!isValidEmail(email)) {
      setEmailError("Enter a valid email address")
      error = true
    }

    if (!isValidCountryCode(countryCode)) {
      setCountryCodeError("Should be a valid code e.g. '+44'")
      error = true
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneError("Enter a valid phone number")
      error = true
    }

    if (!isValidPassword(password)) {
      setPasswordError("At least 8 characters, 1 symbol, 1 number")
      error = true
    }

    if (!password || password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
      error = true
    }

    // success case!
    return (
      !error &&
      navigation.navigate("VerifyAccount", {
        email: email,
        phoneNumber: completePhoneNumber,
      })
    )
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
          {/* TODO: implement country picker */}

          {/* <UserInput
            // style={styles.countryCode}
            value={countryCode}
            onChangeText={setCountryCode}
            // You might want a picker or modal to select country codes
          /> */}
          {/* <TouchableOpacity
            onPress={() => setShowCountryPicker(true)}
            style={{
              height: 54,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              padding: 15,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontSize: 17,
              }}
            >
              {countryCode}
            </Text>
          </TouchableOpacity> */}
          {/* <CountryPicker
            lang="en"
            show={showCountryPicker}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code)
              setShowCountryPicker(false)
            }}
          /> */}
          <UserInput
            placeholder="+44"
            value={countryCode}
            onChangeText={setCountryCode}
            error={countryCodeError}
            keyboardType="phone-pad"
            style={{
              flex: 5, // 25% of space
              marginRight: 12,
            }}
          />
          <UserInput
            // style={styles.phoneNumber}
            placeholder="123456789"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={phoneError}
            keyboardType="phone-pad"
            style={{
              flex: 15, // 75% of space
            }}
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
    height: "auto",
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
  // Add other styles for your input fields and error messages
})

export default CreateAccount
