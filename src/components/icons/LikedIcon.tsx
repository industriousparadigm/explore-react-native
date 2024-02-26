import React from "react"
import { Path, Svg } from "react-native-svg"

function LikedIcon() {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path
        fill="#3C3C3C"
        fillOpacity="0.3"
        fillRule="evenodd"
        d="M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M12 5.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.777-3.394 6.855-8.537 11.518l-.013.012L12 21.35l-1.45-1.31-.04-.036C5.384 15.344 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09zm0 13.56l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default LikedIcon
