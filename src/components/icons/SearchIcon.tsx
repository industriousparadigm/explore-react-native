import React from "react"
import { Path, Svg } from "react-native-svg"

function SearchIcon() {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path
        fill="#3C3C3C"
        fillRule="evenodd"
        d="M9.746 17.5A7.7 7.7 0 012 9.75 7.7 7.7 0 019.746 2a7.7 7.7 0 017.746 7.75 7.7 7.7 0 01-7.746 7.75zm0-13.286c-3.098 0-5.533 2.436-5.533 5.536 0 3.1 2.435 5.535 5.533 5.535 3.099 0 5.533-2.435 5.533-5.535s-2.434-5.536-5.533-5.536zm7.772 11.701l-1.6 1.601L20.4 22l1.6-1.601-4.482-4.484z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default SearchIcon
