import React from "react"
import { TouchableOpacity, StyleSheet, Image } from "react-native"
import PageLayout from "../components/PageLayout"
import { useTypedNavigation } from "../hooks/useTypedNavigation"

const Logo = () => {
  const navigation = useTypedNavigation()

  return (
    <PageLayout type="blue">
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Onboarding")} activeOpacity={1}>
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      </TouchableOpacity>
    </PageLayout>
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

export default Logo
