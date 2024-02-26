// ImageCarousel.tsx
import React, { useState, useRef } from "react"
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageStyle,
} from "react-native"
import PaginationDots from "./PaginationDots"

type Props = {
  images: string[]
  grayscale?: boolean
}

const { width: screenWidth } = Dimensions.get("window")

const ImageCarousel = ({ images, grayscale = false }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollViewRef = useRef(null)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / screenWidth)
    setActiveIndex(currentIndex)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {images.map((image, index) =>
          grayscale ? (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ) : (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ),
        )}
      </ScrollView>
      <View style={styles.dotsyBox}>
        <PaginationDots numberOfDots={images.length} activeIndex={activeIndex} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.75, // 4:3 aspect ratio
    resizeMode: "cover",
  },
  dotsyBox: {
    position: "absolute",
    bottom: 12,
    width: "100%",
    left: "auto",
    right: "auto",
  },
})

export default ImageCarousel
