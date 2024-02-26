import React from "react"
import { Path, Svg } from "react-native-svg"

function PaymentIcon() {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M8 8c0-4.41 3.589-8 8-8s8 3.59 8 8c0 4.411-3.589 8-8 8-.339 0-.672-.028-1-.069V13.91c.326.055.659.09 1 .09 3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6s-6 2.692-6 6c0 .342.035.675.09 1H8.069A8.047 8.047 0 018 8zm7-5v1.05c-1.14.232-2 1.242-2 2.45C13 7.879 14.122 9 15.5 9h1a.5.5 0 010 1H15v3h2v-1.05c1.14-.233 2-1.243 2-2.45C19 8.122 17.878 7 16.5 7h-1a.5.5 0 010-1H19V4h-2V3h-2zm3 16c.551 0 1-.448 1-1v-1h2v1a2.995 2.995 0 01-2 2.816V21c0 1.654-1.346 3-3 3H8a1 1 0 01-.707-.292l-1.833-1.71H0V12h5.46l1.833-1.707A.997.997 0 018 10h5a1 1 0 011 1v2c0 1.654-1.346 3-3 3H9v-2h2c.551 0 1-.448 1-1v-1H8.414L6 14.414v5.172L8.414 22H16c.551 0 1-.448 1-1h-4v-2h5zM2 20h2v-6H2v6z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default PaymentIcon
