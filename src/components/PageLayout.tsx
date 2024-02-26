import React from "react"
import { SafeAreaView, StatusBar, StatusBarStyle, StyleSheet, View } from "react-native"
import HometrailIcon from "./icons/HometrailIcon"
import ShopIcon from "./icons/ShopIcon"
import MessageIcon from "./icons/MessageIcon"
import HeartIcon from "./icons/HeartIcon"
import ProfileIcon from "./icons/ProfileIcon"
import Spacer from "./Spacer"

type PageLayoutProps = {
  type: "white" | "blue"
  children: React.ReactNode
  showNav?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ type, children, showNav = false }) => {
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
      {/* with a nav we need "blank" content at the bottom of the scroll */}
      {showNav && <Spacer size={32} />}
      {showNav && (
        <View style={styles.nav}>
          <HometrailIcon />
          <MessageIcon />
          <ShopIcon />
          <HeartIcon />
          <ProfileIcon />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 84,
    backgroundColor: "#FAFAFA",
    borderTopWidth: 1,
    borderTopColor: "#D8D8D8",
    paddingVertical: 11,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default PageLayout
