import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; //

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MainTabs", { screen: "Home" })}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  input: {
    borderColor: "#aaa",
    backgroundColor: "#D9D7B6",
    borderRadius: 8,
    padding: 12,
    width: 300,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#C1BFFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    borderRadius: 48,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontFamily: "SourceSerif2",
    fontSize: 16,
  },
});
