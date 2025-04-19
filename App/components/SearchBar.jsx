import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const SearchBar = ({ brand }) => {
  return (
    <View>
      <TextInput
        style={[
          { backgroundColor: brand?.subColor || "#D9D7B6" },
          styles.input,
        ]}
        placeholder="Search"
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    borderColor: "#aaa",
    // backgroundColor: "#D9D7B6",
    borderRadius: 8,
    padding: 12,
    width: 370,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
});
