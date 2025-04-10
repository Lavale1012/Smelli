import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import LoginForm from "../../components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Smelli</Text>
      <View style={styles.loginComp}>
        <LoginForm />
      </View>

      <Image
        source={require("../../../assets/loginImg.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FDFBD4",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 64,

    color: "#333",
    bottom: "10%",
    fontFamily: "SourceSerif3",
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: "contain",

    bottom: -120,
    position: "absolute",
  },
  loginComp: {
    bottom: "10%",
  },
});
export default Login;
