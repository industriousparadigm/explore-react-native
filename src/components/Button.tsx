// src/components/Button.tsx
import React from "react"
import { TouchableOpacity, StyleSheet, View, Image, GestureResponderEvent } from "react-native"
import { Text } from "./CustomText"

type ButtonProps = {
  type?: "primary" | "secondary" | "outline"
  icon?: "google" | "apple"
  onPress?: (event: GestureResponderEvent) => void
  children: React.ReactNode
}

const icons = {
  google: require("../../assets/images/google-icon.png"),
  apple: require("../../assets/images/apple-icon.png"),
}

const Button: React.FC<ButtonProps> = ({ type = "primary", icon, children, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[type]]} onPress={onPress}>
      {icon && <Image source={icons[icon]} style={styles.icon} />}
      <Text style={[styles.buttonText, type === "outline" && styles.outlineText]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  primary: {
    backgroundColor: "#4A90E2",
  },
  secondary: {
    backgroundColor: "#3C3C3C",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#3C3C3C",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    textAlign: "center",
  },
  outlineText: {
    color: "#3C3C3C",
  },
  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 40,
  },
})

export default Button
