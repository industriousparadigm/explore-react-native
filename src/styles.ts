// src/styles.ts
import { StyleSheet } from "react-native"

export const textStyles = StyleSheet.create({
  regularText: {
    fontSize: 16,
    color: "#9C9C9C",
  },
  boldText: {
    color: "#3C3C3C",
    fontFamily: "Gilroy-Bold",
  },
})

export const viewStyles = StyleSheet.create({
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
})