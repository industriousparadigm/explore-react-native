export type RootStackParamList = {
  Logo: undefined
  LoginOptions: undefined
  SignIn: undefined
  Welcome: undefined
  ForgotPassword: undefined
  CreateAccount: undefined
  VerifyAccount: { email: string; phoneNumber: string }
  Onboarding: undefined
  Discover: undefined
}

export interface Address {
  doorNumber: string
  street: string
  city: string
  postcode: string
  country: string
}

export interface Apartment {
  id: string
  title: string
  address: Address
  pricePerMonth: number
  images: string[]
  numberOfBedrooms: number
  numberOfBathrooms: number
  propertyType: "Entire Flat" | "Room" | "Studio"
  bookingDate?: string
  viewingDate?: string
  bookingCancellationDate?: string
  available: boolean
  amenities: string[]
  description: string
  squareFeet?: number
}
