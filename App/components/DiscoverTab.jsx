import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const DiscoverTab = ({ brands }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={brands.image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default DiscoverTab;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    aspectRatio: 1.6, // 👈 makes it responsive (width controls height)
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    resizeMode: "cover",
  },
});
