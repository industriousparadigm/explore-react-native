import React from "react"
import { Path, Svg } from "react-native-svg"

function MessageIcon() {
  return (
    <Svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <Path
        fill="#3C3C3C"
        fillRule="evenodd"
        d="M25.667 2.333H2.333v23.334l8.167-7h15.167V2.333zm-2.334 2.334H4.667v15.75l4.666-4.084h14V4.667z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default MessageIcon
