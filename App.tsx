import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginAttempted, setLoginAttempted] = useState(false)

  const handleLogin = () => {
    setLoginAttempted(true)
    if (username === "user" && password === "12345") {
      setIsLoggedIn(true)
    } else {
      Alert.alert("Login Failed", "Wrong credentials", [{ text: "OK" }])
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
    setLoginAttempted(false)
  }

  if (isLoggedIn) {
    return (
      <View style={styles.landingContainer}>
        <Text style={styles.landingText}>Welcome to my hello world React Native app!</Text>
        <Button title="Logout" onPress={handleLogout} color="#841584" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loginAttempted && username !== "user" && password !== "12345" && (
        <Text style={styles.errorText}>Wrong credentials</Text>
      )}

      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  landingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4caf50", // Feel free to choose a funky color!
  },
  landingText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20, // Added some margin for visual spacing
  },
})

export default App
