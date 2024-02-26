import React from "react"
import { Path, Svg } from "react-native-svg"

function GreyedOutCalendarIcon() {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path fill="#D8D8D8" d="M2 3H22V21H2z"></Path>
      <Path
        fill="#9C9C9C"
        fillRule="evenodd"
        d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H1v19h22V3h-2zM8 5h7V3H8V1H6v6h2V5zm6 4.5l1.414 1.414-2.293 2.293 2.293 2.293L14 16.914l-2.293-2.293-2.293 2.293L8 15.5l2.293-2.293L8 10.914 9.414 9.5l2.293 2.293L14 9.5z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default GreyedOutCalendarIcon
