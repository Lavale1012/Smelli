import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>chatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFBD4",
    height: "100%",
  },
});
