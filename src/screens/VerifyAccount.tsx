import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native"
import Button from "../components/Button"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import Spacer from "../components/Spacer"
import PageLayout from "../components/PageLayout"
import Checkbox from "../components/Checkbox" // Assume you have a Checkbox component
import { Text } from "../components/CustomText"
import { textStyles } from "../styles"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../types"
import FourDigitCode from "../components/FourDigitCode"

type Props = {
  route: RouteProp<RootStackParamList, "VerifyAccount">
}

const VerifyAccount = ({ route }: Props) => {
  const [verificationMethod, setVerificationMethod] = useState<"sms" | "email">("sms")
  const [messageSent, setMessageSent] = useState(false)
  const navigation = useTypedNavigation()

  const { email, phoneNumber } = route.params || {}

  const handleVerification = () => {
    if (verificationMethod === "sms") {
      // Send verification SMS
      console.log("pretend we sent an SMS")
    } else {
      // Send verification email
      console.log("pretend we sent an email")
    }

    setMessageSent(true)
  }

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={textStyles.boldText}>Verify account</Text>
          <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={textStyles.regularText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={49} />
        {messageSent ? (
          <View>
            <FourDigitCode onCodeFilled={() => setTimeout(() => navigation.navigate("Welcome"), 1000)} />
            <Spacer size={94} />
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Coming Soon!", "This feature will be available in future updates.", [{ text: "OK" }], {
                  cancelable: true,
                })
              }}
            >
              <Text style={[textStyles.regularText, styles.noMessage]}>
                {verificationMethod === "sms" ? "Didn't receive text message?" : "Didn't receive email?"}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>
              {verificationMethod === "sms" ? (
                <Text style={textStyles.regularText}>
                  We will send you a text message to this number{" "}
                  <Text style={[textStyles.boldText, { color: "#3c3c3c" }]}>{phoneNumber}</Text>.
                </Text>
              ) : (
                <Text style={textStyles.regularText}>
                  We will send you an email to this address{" "}
                  <Text style={[textStyles.boldText, { color: "#3c3c3c" }]}>{email}</Text>.
                </Text>
              )}
            </Text>
            <Spacer size={40} />
            <View style={styles.checkboxContainer}>
              <Checkbox
                label="Via SMS text"
                iconUrl="https://res.cloudinary.com/thunder-fusion/image/upload/v1706279608/mgx9wyj1r1k43ojhplq2.svg"
                checked={verificationMethod === "sms"}
                onPress={() => setVerificationMethod("sms")}
              />
              <Spacer size={16} axis="horizontal" />
              <Checkbox
                label="Via email"
                iconUrl="https://res.cloudinary.com/thunder-fusion/image/upload/v1706279609/fummglsjpiaarh4wcwi7.svg"
                checked={verificationMethod === "email"}
                onPress={() => setVerificationMethod("email")}
              />
            </View>
            <Spacer size={40} />
            <Button type="primary" onPress={handleVerification}>
              {verificationMethod === "sms" ? "Send text message" : "Send email"}
            </Button>
          </View>
        )}
      </View>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
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
  checkboxContainer: {
    flexDirection: "row",
    width: "100%",
  },
  noMessage: {
    color: "#4A90E2",
  },
})

export default VerifyAccount
