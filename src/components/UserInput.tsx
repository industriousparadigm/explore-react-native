import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Text } from "./CustomText"

type UserInputProps = {
  label: string
  type: "email" | "password"
  placeholder?: string
  error?: string
  value: string
  onChangeText: (text: string) => void
}

const UserInput: React.FC<UserInputProps> = ({ label, type, placeholder, error, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, !!error && styles.inputError]}
        placeholder={placeholder || type}
        placeholderTextColor="#9C9C9C" // Set the placeholder text color to grey
        value={value}
        onChangeText={onChangeText}
        keyboardType={type === "email" ? "email-address" : "default"}
        secureTextEntry={type === "password"}
        autoCapitalize="none"
      />
      {/* Reserve space for error message */}
      <View style={styles.errorContainer}>{!!error && <Text style={styles.errorText}>{error}</Text>}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#9C9C9C",
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    fontFamily: "Gilroy-Regular",
    height: 54,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    padding: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 17,
  },
  inputError: {
    borderColor: "#E01C3D", // Change the border color if there is an error
  },
  errorContainer: {
    height: 22, // Reserve space for error message
    marginTop: 7,
  },
  errorText: {
    color: "#E01C3D",
    fontSize: 17,
    fontWeight: "bold",
  },
})

export default UserInput
