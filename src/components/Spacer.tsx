// src/components/Spacer.tsx
import React from "react"
import { View } from "react-native"

type SpacerProps = {
  size: number
  axis?: "vertical" | "horizontal"
}

const Spacer: React.FC<SpacerProps> = ({ size, axis = "vertical" }) => {
  const style = axis === "vertical" ? { height: size } : { width: size }
  return <View style={style} />
}

export default Spacer
