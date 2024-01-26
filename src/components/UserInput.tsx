import React from "react"
import { View, TextInput, StyleSheet, StyleProp, TextStyle } from "react-native"
import { Text } from "./CustomText"

type UserInputProps = {
  style?: StyleProp<TextStyle>
  label?: string
  placeholder?: string
  error?: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password"
}

const UserInput: React.FC<UserInputProps> = ({
  label,
  placeholder,
  error,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, !!error && styles.inputError]}
        placeholder={placeholder}
        placeholderTextColor="#9C9C9C"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
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
