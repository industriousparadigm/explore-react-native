import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Apartment } from "../types"
import { Text } from "./CustomText"
import Spacer from "./Spacer"
import LikedIcon from "./icons/LikedIcon"
import { textStyles, viewStyles } from "../styles"
import CalendarIcon from "./icons/CalendarIcon"
import BedIcon from "./icons/BedIcon"
import BathroomIcon from "./icons/BathroomIcon"
import { formatAddress, formatNumberWithCommas, formatUKPostcode } from "../utils"
import ImageCarousel from "./ImageCarousel"
import GreyedOutCalendarIcon from "./icons/GreyedOutCalendarIcon"
import Button from "./Button"
import PaymentIcon from "./icons/PaymentIcon"

type Props = Apartment

type FormatAddressOptions = {
  country?: boolean
  doorNumber?: boolean
  city?: boolean
  postcode?: "full" | "outward" | ""
}

const ApartmentCard = ({
  title,
  address,
  pricePerMonth,
  images,
  numberOfBedrooms,
  numberOfBathrooms,
  propertyType,
  bookingDate,
  viewingDate,
  bookingCancellationDate,
  amenities,
  description,
  squareFeet,
  available,
}: Props) => {
  const isBooked = bookingDate && !bookingCancellationDate && !viewingDate
  const isCancelledBooking = bookingDate && bookingCancellationDate && !viewingDate

  const isViewedAndStillAvailable = !!viewingDate && available

  const isViewedAndUnavailable = !!viewingDate && (!available || !!bookingCancellationDate)

  return (
    <View style={styles.card}>
      <ImageCarousel images={images} grayscale={!!viewingDate && !available} />
      <Text style={[textStyles.boldText, styles.flatTypeSticker]}>{propertyType}</Text>
      <TouchableOpacity style={styles.likedButton}>
        <LikedIcon />
      </TouchableOpacity>
      <Spacer size={16} />
      <View>
        <View style={styles.twoColumnRow}>
          <Text style={[textStyles.boldText, styles.title]}>{title}</Text>
          <Text>
            <Text style={[textStyles.boldText, styles.priceNumber]}>£{formatNumberWithCommas(pricePerMonth)}</Text>
            <Text style={styles.perMonth}>/pm</Text>
          </Text>
        </View>
        <View style={styles.twoColumnRow}>
          <Text style={styles.address}>{formatAddress(address)}</Text>
          <Text>
            <Text>{numberOfBedrooms} </Text>
            <BedIcon />
            <Text>{" · "}</Text>
            <Text>{numberOfBathrooms} </Text>
            <BathroomIcon />
          </Text>
        </View>
        {isViewedAndStillAvailable && (
          <View>
            <Text style={textStyles.boldText}>{`Viewed on ${viewingDate}`}</Text>
            <Spacer size={10} />
            <Button icon="payment">{` Pay to reserve`}</Button>
          </View>
        )}

        {isViewedAndUnavailable && (
          <View>
            <Text style={textStyles.boldText}>{`Viewed on ${viewingDate}`}</Text>
            <Spacer size={10} />
            <Text style={[textStyles.boldText, { color: "red" }]}>{`Not available!`}</Text>
          </View>
        )}

        {isBooked && !viewingDate && (
          <View style={styles.bookedText}>
            <CalendarIcon />
            <Spacer size={8} axis="horizontal" />
            <Text style={textStyles.boldText}>{`Booked for ${bookingDate}`}</Text>
          </View>
        )}
        {isCancelledBooking && (
          <View>
            <Text style={textStyles.boldText}>{`Booked previously for ${bookingDate}`}</Text>
            <Spacer size={12} />
            <View style={styles.bookedText}>
              <GreyedOutCalendarIcon />
              <Spacer size={8} axis="horizontal" />
              <Text
                style={[textStyles.boldText, { color: "#9c9c9c" }]}
              >{`Cancelled on ${bookingCancellationDate}`}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    resizeMode: "cover",
  },
  info: {
    flex: 1,
    alignItems: "flex-end",
    paddingBottom: 24,
  },
  rightAlignedInfo: {
    flex: 1,
    alignItems: "flex-end",
  },
  flatTypeSticker: {
    position: "absolute",
    left: 10,
    top: 8,
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 2,
    backgroundColor: "#3C3C3C",
    color: "white",
    fontSize: 12,
  },
  likedButton: { position: "absolute", right: 10, top: 8 },
  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
  },
  address: {
    fontSize: 14,
    color: "#9c9c9c",
    marginVertical: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
  },
  priceNumber: {
    fontSize: 17,
    color: "#4A90E2",
  },
  perMonth: {
    fontSize: 14,
    color: "black",
    fontWeight: "normal",
  },
  bookedContainer: {
    alignItems: "center",
  },
  bookedText: {
    fontSize: 14,
    flexDirection: "row",
    alignItems: "center",
  },
})

export default ApartmentCard
