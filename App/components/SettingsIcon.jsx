import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SettingsIcon = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SettingsScreen");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.icon}>⚙️</Text>
    </TouchableOpacity>
  );
};

export default SettingsIcon;

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  icon: {
    fontSize: 24,
  },
});
