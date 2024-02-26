import React from "react"
import { Path, Svg } from "react-native-svg"

function CalendarIcon() {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path fill="#CBE0F8" d="M2 3H22V21H2z"></Path>
      <Path
        fill="#4A90E2"
        fillRule="evenodd"
        d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H1v19h22V3h-2zM8 5h7V3H8V1H6v6h2V5zm1 4H5v4h4V9zm1 0h4v4h-4V9zm9 0h-4v4h4V9zM5 14h4v4H5v-4zm9 0h-4v4h4v-4z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default CalendarIcon
