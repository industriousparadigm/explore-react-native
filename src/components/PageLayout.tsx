import React from "react"
import { SafeAreaView, StatusBar, StatusBarStyle, StyleSheet } from "react-native"

type PageLayoutProps = {
  type: "white" | "blue"
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ type, children }) => {
  let backgroundColor = "white"
  let barStyle: StatusBarStyle = "dark-content"

  switch (type) {
    case "blue": {
      backgroundColor = "#4A90E2"
      barStyle = "light-content"
      break
    }

    case "white":
    default: {
      break
    }
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={barStyle} showHideTransition="fade" animated={true} />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default PageLayout
