import React from "react"
import { TouchableOpacity, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SafeAreaView } from "react-native-safe-area-context"
import { RootStackParamList } from "../types"

// This defines the type for the navigation prop
// type LogoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Logo">

const LogoScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A90E2" }}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Initial")} activeOpacity={1}>
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 75,
  },
})

export default LogoScreen
