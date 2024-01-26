import React, { useRef, useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

type Props = {
  onCodeFilled: () => any
}

const FourDigitCode = ({ onCodeFilled }: Props) => {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)
  const [codeValidated, setCodeValidated] = useState(false)
  const textInputRef = useRef<any>(null)

  const handleCodeChange = (newCode: string) => {
    setError(false)
    setCodeValidated(false)
    if (newCode.length <= 4) {
      setCode(newCode)
      if (newCode.length === 4) {
        console.log(code)
        const isValid = newCode === "2358"
        if (isValid) {
          setCodeValidated(true)
          onCodeFilled()
        } else {
          setError(true)
        }
      }
    }
  }

  const getCodeBoxBorder = (index: number) => {
    if (error) return styles.boxError
    if (codeValidated) return styles.boxValid
    if (code.length === index) return styles.boxActive
    return styles.boxInactive
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => textInputRef.current?.focus()}>
        <View style={styles.codeContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={[styles.codeBox, getCodeBoxBorder(index)]}>
              <Text style={styles.codeText}>{code[index] || "0"}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
      <TextInput
        ref={textInputRef}
        value={code}
        onChangeText={handleCodeChange}
        keyboardType="numeric"
        style={styles.invisibleInput}
        maxLength={4}
        returnKeyType="done"
        textContentType="oneTimeCode" // For iOS to suggest autofill from SMS
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeBox: {
    width: 59,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    marginRight: 12,
  },
  codeText: {
    color: "grey",
    fontSize: 22,
  },
  boxActive: {
    borderColor: "#4A90E2",
    borderWidth: 2,
  },
  boxError: {
    borderColor: "#E01C3D",
    borderWidth: 2,
  },
  boxValid: {
    borderColor: "#69B241",
    borderWidth: 2,
  },
  boxInactive: {
    borderColor: "#9C9C9C",
    borderWidth: 1,
  },
  invisibleInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
})

export default FourDigitCode
