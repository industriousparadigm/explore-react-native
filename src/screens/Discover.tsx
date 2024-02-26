import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import PageLayout from "../components/PageLayout"
import AddFriendsIcon from "../components/icons/AddFriendsIcon"
import { Text } from "../components/CustomText"
import { textStyles } from "../styles"
import UserInput from "../components/UserInput"
import SearchIcon from "../components/icons/SearchIcon"
import Spacer from "../components/Spacer"
import MultiEnvironmentSvg from "../components/MultiEnvironmentSvg"
import useKeyboardHeight from "../hooks/useKeyboardHeight"
import { apartments } from "../utils/mock"
import ApartmentCard from "../components/ApartmentCard"
import { Apartment } from "../types"

type TabName = "Search" | "Bookings" | "Viewed"

const Discover = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>("Search")
  const [searchInput, setSearchInput] = useState<string>("")
  const keyboardHeight = useKeyboardHeight()

  const handleTabSelect = (tabName: TabName) => {
    setSelectedTab(tabName)
  }

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Search":
        return (
          <View>
            {searchInput ? (
              <View>
                <MultiEnvironmentSvg
                  style={{ width: 101, height: 125, alignSelf: "center" }}
                  src="https://res.cloudinary.com/thunder-fusion/image/upload/v1706952256/zbbzgmhc5pgs8v3u9wa9.svg"
                />
                <Text style={styles.contentText}>No matches found.</Text>
              </View>
            ) : (
              <>
                <Spacer size={160} />
                <Text style={styles.contentText}>Everything starts today.{"\n"}Find your perfect home now.</Text>
              </>
            )}
            <Spacer size={32} />
            <UserInput
              placeholder="E.g. Clapham junction or SW11"
              value={searchInput}
              onChangeText={setSearchInput}
              icon={<SearchIcon />}
            />
          </View>
        )
      case "Bookings":
        let bookedApartments: Apartment[] = []
        let apartmentsWithCancelledBooking: Apartment[] = []

        apartments.forEach((apartment) => {
          if (apartment.bookingDate) {
            apartment.bookingCancellationDate
              ? apartmentsWithCancelledBooking.push(apartment)
              : bookedApartments.push(apartment)
          }
        })

        return (
          <ScrollView style={styles.bookingsContainer} showsVerticalScrollIndicator={false}>
            {bookedApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
            {apartmentsWithCancelledBooking.length > 0 && (
              <>
                <Spacer size={14} />
                <View
                  style={{
                    height: 28,
                    backgroundColor: "#D8D8D8",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, textAlign: "center", textTransform: "uppercase" }}>
                    Cancelled or removed
                  </Text>
                </View>
                <Spacer size={30} />
                <Text>Will be automatically removed in 5 days.</Text>
                <Spacer size={20} />
                {apartmentsWithCancelledBooking.map((apartment) => (
                  <ApartmentCard key={apartment.id} {...apartment} />
                ))}
              </>
            )}
          </ScrollView>
        )
      case "Viewed":
        let viewedApartmentsStillAvailable: Apartment[] = []
        let viewedApartmentsNoLongerAvailable: Apartment[] = []

        apartments.forEach((apartment) => {
          if (apartment.viewingDate) {
            apartment.bookingCancellationDate || !apartment.available
              ? viewedApartmentsNoLongerAvailable.push(apartment)
              : viewedApartmentsStillAvailable.push(apartment)
          }
        })

        return (
          <ScrollView style={styles.bookingsContainer} showsVerticalScrollIndicator={false}>
            {viewedApartmentsStillAvailable.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
            {viewedApartmentsNoLongerAvailable.length > 0 && (
              <>
                <Spacer size={14} />
                <View
                  style={{
                    height: 28,
                    backgroundColor: "#D8D8D8",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, textAlign: "center", textTransform: "uppercase" }}>
                    Cancelled or removed
                  </Text>
                </View>
                <Spacer size={30} />
                <Text>Will be automatically removed in 5 days.</Text>
                <Spacer size={20} />
                {viewedApartmentsNoLongerAvailable.map((apartment) => (
                  <ApartmentCard key={apartment.id} {...apartment} />
                ))}
              </>
            )}
          </ScrollView>
        )
      default:
        return null
    }
  }

  return (
    <PageLayout type="white" showNav>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[textStyles.boldText, styles.headingText]}>Discover</Text>
          <AddFriendsIcon />
        </View>
        <View style={styles.tabsContainer}>
          {(["Search", "Bookings", "Viewed"] as const).map((tabName) => (
            <TouchableOpacity
              key={tabName}
              style={[styles.tab, selectedTab === tabName && styles.selectedTab]}
              onPress={() => handleTabSelect(tabName)}
            >
              <Text
                style={[styles.tabText, selectedTab === tabName ? styles.selectedTabText : styles.unselectedTabText]}
              >
                {tabName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderTabContent()}
      </View>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headingText: {
    fontSize: 32,
    textAlign: "left",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    padding: 8,
    flex: 1,
  },
  tabText: {
    fontSize: 16,
    textAlign: "center",
  },
  selectedTabText: {
    color: "#3C3C3C",
    fontWeight: "bold",
  },
  unselectedTabText: {
    color: "#9C9C9C",
  },
  selectedTab: {
    borderBottomWidth: 4,
    borderBottomColor: "#4A90E2",
  },
  contentText: {
    fontSize: 17,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 8,
  },
  bookingsContainer: {
    flex: 1,
  },
})

export default Discover
