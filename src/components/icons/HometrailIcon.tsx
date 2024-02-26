import React from "react"
import { Path, Svg } from "react-native-svg"

interface HometrailIconProps {
  selected?: boolean
}

function HometrailIcon({ selected = true }: HometrailIconProps) {
  const lightBlue = "#CBE0F8"
  const darkBlue = "#4A90E2"
  const defaultColor = "#3C3C3C"

  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {/* Light blue fill when selected */}
      {selected && (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.33337 4.66683L25.6667 2.3335V25.6668H2.33337V18.6668V4.66683Z"
          fill={lightBlue}
        />
      )}
      {/* Outline; always visible but conditional color */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.33337 4.66683L25.6667 2.3335V25.6668H19.8334H17.5H2.33337V18.6668V4.66683ZM19.8334 23.3335V18.6668H17.5V23.3335H4.66671V7.00016L23.3334 5.25016V23.3335H19.8334Z"
        fill={selected ? darkBlue : defaultColor}
      />
    </Svg>
  )
}

export default HometrailIcon
