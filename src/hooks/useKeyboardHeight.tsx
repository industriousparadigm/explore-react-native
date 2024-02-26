import { useState, useEffect } from "react"
import { Keyboard, EmitterSubscription } from "react-native"

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    const showSubscription: EmitterSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height)
    })
    const hideSubscription: EmitterSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return keyboardHeight
}

export default useKeyboardHeight
