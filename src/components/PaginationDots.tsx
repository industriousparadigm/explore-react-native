// PaginationDots.tsx
import React from "react"
import { View, StyleSheet } from "react-native"

interface Props {
  numberOfDots: number
  activeIndex: number
}

const PaginationDots = ({ numberOfDots, activeIndex }: Props) => {
  const renderDots = () => {
    const dots = []
    for (let i = 0; i < numberOfDots; i++) {
      dots.push(<View key={i} style={[styles.dot, activeIndex === i ? styles.activeDot : styles.inactiveDot]} />)
    }
    return dots
  }

  return (
    <View style={styles.pagination}>
      <View style={styles.dotsBox}>{renderDots()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotsBox: {
    flexDirection: "row",
    backgroundColor: "rgba(191, 191, 191, 0.66)",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "black",
  },
  activeDot: {
    opacity: 1,
  },
  inactiveDot: {
    opacity: 0.3,
  },
})

export default PaginationDots

// import React from "react"
// import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
// import MultiEnvironmentSvg from "./MultiEnvironmentSvg" // Ensure this path is correct
// import { textStyles } from "../styles" // Ensure this path is correct

// interface PaginationDotsProps {
//   numberOfDots: number
//   activeIndex: number
//   //   goToPrevSlide: () => void
//   //   goToNextSlide: () => void
//   //   navigate: (screen: string) => void // If you're using a navigation library, type this accordingly
// }

// const PaginationDots: React.FC<PaginationDotsProps> = ({
//   numberOfDots,
//   activeIndex,
//   //   goToPrevSlide,
//   //   goToNextSlide,
//   //   navigate,
// }) => {
//   const isFirstSlide = activeIndex === 0
//   const isLastSlide = activeIndex === numberOfDots - 1

//   const renderDots = () => {
//     const dots = []
//     for (let i = 0; i < numberOfDots; i++) {
//       dots.push(<View key={i} style={[styles.dot, activeIndex === i ? styles.activeDot : styles.inactiveDot]} />)
//     }
//     return dots
//   }

//   return (
//     <View style={styles.pagination}>
//       <View style={styles.dotsBox}>{renderDots()}</View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   pagination: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   dotsBox: {
//     flexDirection: "row",
//     backgroundColor: "#BFBFBF",
//     opacity: 0.44,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     borderRadius: 32,
//     marginHorizontal: 5,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     backgroundColor: "black",
//   },
//   activeDot: {
//     opacity: 1,
//   },
//   inactiveDot: {
//     opacity: 0.3,
//   },
//   arrowIcon: {
//     // Define your styles if you have any
//   },
//   hiddenArrow: {
//     // Define your styles if you have any
//   },
//   skipButton: {
//     // Define your styles if you have any
//   },
//   blueText: {
//     // Define your styles if you have any
//   },
// })

// export default PaginationDots
