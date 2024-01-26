import React from "react"
import { TouchableOpacity, StyleSheet, Image } from "react-native"
import { Text } from "./CustomText"
import MultiEnvironmentSvg from "./MultiEnvironmentSvg"

type CheckboxProps = {
  label: string
  checked: boolean
  onPress: () => void
  iconUrl?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress, iconUrl }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.checkboxBase,
        checked ? styles.checkboxChecked : styles.checkboxUnchecked,
        // When checked, reduce padding to compensate for the thicker border
        checked && {
          padding:
            styles.checkboxBase.padding - (styles.checkboxChecked.borderWidth - styles.checkboxUnchecked.borderWidth),
        },
      ]}
      onPress={onPress}
    >
      {iconUrl && <MultiEnvironmentSvg src={iconUrl} style={styles.icon} />}
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 140,
    height: 100,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    padding: 19,
  },
  checkboxChecked: {
    borderColor: "#4A90E2",
    borderWidth: 3,
  },
  checkboxUnchecked: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 16,
    resizeMode: "contain",
  },
})

export default Checkbox
