import React from "react"
import { Text as DefaultText, TextProps } from "react-native"

export function Text(props: TextProps) {
  return (
    <DefaultText {...props} style={[{ fontFamily: "Gilroy-Regular" }, props.style]}>
      {props.children}
    </DefaultText>
  )
}
