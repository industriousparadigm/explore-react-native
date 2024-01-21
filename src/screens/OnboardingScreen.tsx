import React, { useRef, useState } from "react"
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from "react-native"
import PageLayout from "../components/PageLayout"
import Spacer from "../components/Spacer"
import { textStyles } from "../styles"
import { LogoHorizontal } from "../components/LogoHorizontal"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import MultiEnvironmentSvg from "../components/MultiEnvironmentSvg"

const PADDING = 16
const { width } = Dimensions.get("window")
const adjustedWidth = width - PADDING * 2

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isFirstSlide = activeIndex === 0
  const isLastSlide = activeIndex === 3

  const scrollViewRef = useRef<any>(null)

  const { navigate } = useTypedNavigation()

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setActiveIndex(currentIndex)
  }

  const goToNextSlide = () => {
    if (!isLastSlide) {
      const nextIndex = activeIndex + 1
      scrollViewRef.current?.scrollTo({
        x: nextIndex * adjustedWidth,
        animated: true,
      })
      setActiveIndex(nextIndex)
    }
  }

  const goToPrevSlide = () => {
    if (!isFirstSlide) {
      const prevIndex = activeIndex - 1
      scrollViewRef.current?.scrollTo({
        x: prevIndex * adjustedWidth,
        animated: true,
      })
      setActiveIndex(prevIndex)
    }
  }

  const renderPaginationDots = () => {
    const dots = []
    for (let i = 0; i < 4; i++) {
      dots.push(<View key={i} style={[styles.dot, activeIndex === i ? styles.activeDot : styles.inactiveDot]} />)
    }
    return (
      <View style={styles.pagination}>
        <TouchableOpacity onPress={goToPrevSlide}>
          <MultiEnvironmentSvg
            style={[styles.arrowIcon, isFirstSlide && styles.hiddenArrow]}
            src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781258/bbrhem4nhyottimxjnup.svg"}
          />
        </TouchableOpacity>
        <View style={styles.dotsBox}>{dots}</View>
        <TouchableOpacity onPress={goToNextSlide}>
          <MultiEnvironmentSvg
            style={[styles.arrowIcon, isLastSlide && styles.hiddenArrow]}
            src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781258/zlbiujksebdmrhfrpijl.svg"}
          />
        </TouchableOpacity>

        {isLastSlide && (
          <TouchableOpacity style={styles.skipButton} onPress={() => navigator}>
            <Text style={[textStyles.regularText, styles.blueText]} onPress={() => navigate("Initial")}>
              Ready
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  return (
    <PageLayout type="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoHorizontal />
          <TouchableOpacity style={styles.skipButton} onPress={() => navigate("Initial")}>
            <Text style={textStyles.regularText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={94} />

        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.page}>
            <Text style={[textStyles.boldText, styles.onboardingText]}>
              Welcome to hometrail.{"\n"}
              Everything starts today.{"\n"}
              Find your perfect home now.
            </Text>

            <Spacer size={48} />
            <MultiEnvironmentSvg
              src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781258/ece2bmkvnuxjiixzxlvq.svg"}
              // TODO: images are not responsive
              style={{ width: 266, height: 305, alignSelf: "center" }}
            />
          </View>
          <View style={styles.page}>
            <Text style={[textStyles.boldText, styles.onboardingText]}>
              Find properties that match your criteria, book viewing and contact landlords directly.
            </Text>

            <Spacer size={48} />
            <MultiEnvironmentSvg
              src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781260/zzhc0ippdknlnqxwjgp0.svg"}
              // TODO: images are not responsive
              style={{ width: 312, height: 305, alignSelf: "center" }}
            />
          </View>
          <View style={styles.page}>
            <Text style={[textStyles.boldText, styles.onboardingText]}>
              You can easily search with your friends and housemates, and collaborate on your search.
            </Text>

            <Spacer size={48} />

            <MultiEnvironmentSvg
              src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781259/pqvveyegjqsxyg9p4vpj.svg"}
              // TODO: images are not responsive
              style={{ width: 303, height: 305, alignSelf: "center" }}
            />
          </View>
          <View style={styles.page}>
            <Text style={[textStyles.boldText, styles.onboardingText]}>
              You will clearly see how much you will spend in bills every month and split bills with your roommates.{" "}
            </Text>

            <Spacer size={48} />

            <MultiEnvironmentSvg
              src={"https://res.cloudinary.com/thunder-fusion/image/upload/v1705781258/tgqob6f7ybltuwmcpcfr.svg"}
              // TODO: images are not responsive
              style={{ width: 316, height: 305, alignSelf: "center" }}
            />
          </View>
        </ScrollView>
        {renderPaginationDots()}
      </View>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  page: {
    width: adjustedWidth,
  },
  onboardingText: {
    textAlign: "center",
  },
  pagination: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    marginHorizontal: 32,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  hiddenArrow: {
    opacity: 0,
  },
  dotsBox: {
    flexDirection: "row",
    backgroundColor: "#BFBFBF",
    opacity: 0.44,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "black",
    opacity: 0.3,
  },
  blueText: {
    color: "#4A90E2",
  },
  skipButton: {
    position: "absolute",
    right: 0,
  },
})

export default OnboardingScreen
