import React from "react"
import { Image, StyleSheet } from "react-native"

export function LogoHorizontal() {
  return <Image source={require("../../assets/images/logo-horizontal.png")} style={styles.logoHorizontal} />
}

const styles = StyleSheet.create({
  logoHorizontal: {
    width: 211,
    height: 38,
    resizeMode: "contain",
  },
})
