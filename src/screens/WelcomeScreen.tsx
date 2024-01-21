import React from "react"
import { StyleSheet, View, Image } from "react-native"
import { Text } from "../components/CustomText"
import { textStyles } from "../styles"
import PageLayout from "../components/PageLayout"

const WelcomeScreen = () => {
  return (
    <PageLayout type="blue">
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
        </View>
        <Text>
          <Text style={[textStyles.boldText, styles.welcomeText]}>Welcome{"\n"}to </Text>
          <Text style={[textStyles.boldText, styles.welcomeText, styles.greyText]}>Hometrail</Text>
        </Text>
        <Text style={styles.footerText}>Everything starts today</Text>
      </View>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2", // Replace with the exact color of the blue you want
    justifyContent: "space-between",
    padding: 30, // Adjust padding as needed
  },
  logoContainer: {
    alignSelf: "flex-start", // Centers the logo horizontally
    marginTop: "20%", // Adjust the margin as needed
  },
  logo: {
    width: 38, // Set the width of your logo
    height: 38, // Set the height of your logo
    resizeMode: "contain", // Ensures the logo scales properly
    opacity: 0.5,
  },
  welcomeText: {
    color: "white",
    fontSize: 50,
    letterSpacing: 1.451,
  },
  greyText: {
    color: "#CBE0F8",
  },
  footerText: {
    fontSize: 21,
    fontWeight: "bold",
    opacity: 0.3,
    color: "#CBE0F8", // Assuming white text color
    marginBottom: 20, // Adjust the margin as needed
  },
})

export default WelcomeScreen
