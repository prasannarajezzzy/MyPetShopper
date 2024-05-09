import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("userToken", token);
  } catch (error) {
    console.error("AsyncStorage error: ", error.message);
  }
};

function LoginScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#f4f4f8",
    },
    input: {
      height: 50,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      backgroundColor: "#ffffff",
      fontSize: 16,
    },
    button: {
      backgroundColor: "#6200ee",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    linkText: {
      marginTop: 20,
      textAlign: "center",
      color: "#6200ee",
      fontSize: 16,
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token !== null) {
        return token;
      } else {
        console.log("No token found");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch the token from storage", error);
      return null;
    }
  };
  const handleLogin = async () => {
    console.log("Login credentials", username, password);
    try {
      // const response = await fetch('https://your-backend.com/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });
      // const json = await response.json();
      const response = { ok: true };
      const json = { ok: true, token: "test-token-string" }; // Ensure this matches the actual API response structure
      if (response.ok) {
        await storeToken(json.token); // Correctly pass only the token string
        let val = await getToken();
        console.log("datass", val); // Output the token to confirm it's stored and retrieved correctly
        console.log("Truee");
      } else {
        console.error("Error:", json.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate("Signup")}
        style={styles.linkText}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

export default LoginScreen;
