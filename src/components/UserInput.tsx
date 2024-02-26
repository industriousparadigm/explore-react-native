import React from "react"
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { Text } from "./CustomText"
import { textStyles } from "../styles"

type UserInputProps = {
  style?: StyleProp<ViewStyle>
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
  icon?: React.ReactNode // Optional icon
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
  icon,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[styles.input, !!error && styles.inputError, icon ? styles.inputWithIcon : null]}
          placeholder={placeholder}
          placeholderTextColor="#9C9C9C"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.errorContainer}>
        {!!error && <Text style={[textStyles.boldText, styles.errorText]}>{error}</Text>}
      </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8D8D8",
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontFamily: "Gilroy-Regular",
    height: 54,
    flex: 1,
    padding: 15,
    fontSize: 17,
  },
  inputWithIcon: {
    paddingLeft: 44,
  },
  iconContainer: {
    position: "absolute",
    left: 15,
    zIndex: 10,
  },
  inputError: {
    borderColor: "#E01C3D",
  },
  errorContainer: {
    height: 22,
    marginTop: 7,
  },
  errorText: {
    color: "#E01C3D",
    fontSize: 17,
  },
})

export default UserInput
