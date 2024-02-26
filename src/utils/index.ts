import { Address } from "../types"

export function isValidEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export function isValidCountryCode(code: string): boolean {
  // Regular expression to match a country code pattern: + followed by 1 to 3 digits
  const countryCodeRegex = /^\+\d{1,3}$/

  return countryCodeRegex.test(code)
}

export function isValidPhoneNumber(phoneNumber: string): boolean {
  // Remove any non-digit characters from the phone number
  const digits = phoneNumber.replace(/\D/g, "")

  // Check if the length of the digits string is between 7 and 10
  return digits.length >= 7 && digits.length <= 10
}

export function isValidPassword(password: string): boolean {
  // At least 8 characters in total
  const minLengthRegex = /.{8,}/

  // At least one symbol (any non-letter and non-number)
  const symbolRegex = /[^A-Za-z0-9]/

  // At least one number
  const numberRegex = /[0-9]/

  // Validate the password against all the regular expressions
  return minLengthRegex.test(password) && symbolRegex.test(password) && numberRegex.test(password)
}

export function formatUKPostcode(postcode: string) {
  const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase()

  let result = {
    formattedPostcode: postcode,
    outwardCode: "",
    inwardCode: "",
  }

  // return same input if bad format
  if (cleanPostcode.length < 5 || cleanPostcode.length > 7) {
    console.warn("Bad postcode format:", postcode)
    return result
  }

  // inward code is always 3 characters from the end
  const inwardCode = cleanPostcode.slice(-3)
  const outwardCode = cleanPostcode.slice(0, -3)

  return {
    formattedPostcode: `${outwardCode} ${inwardCode}`,
    outwardCode,
    inwardCode,
  }
}

export function formatAddress(address: Address) {
  const { outwardCode } = formatUKPostcode(address.postcode)
  return `${address.doorNumber} ${address.street}・${outwardCode}`
}

export function formatNumberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
