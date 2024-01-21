import React from "react"
import { Platform, Image, ImageStyle, StyleProp } from "react-native"
import { SvgUri } from "react-native-svg"

interface Props {
  src: string
  style?: StyleProp<ImageStyle>
}

/**
 * Multi environment svg aims to address the issue whereby SVGs might work fine
 * in the web environment directly, but not in ios, and SvgUri library, on the
 * other hand, crashes on web 🥲
 */
const MultiEnvironmentSvg = ({ src, style }: Props) => {
  if (Platform.OS === "web") {
    // Use native Image tag for web, applying the passed-in styles
    return <Image style={[style]} source={{ uri: src }} />
  } else {
    // Warning: might need to handle the style prop differently
    // as SvgUri may not accept all style properties (like an Image does)
    return <SvgUri style={style} uri={src} />
  }
}

export default MultiEnvironmentSvg
