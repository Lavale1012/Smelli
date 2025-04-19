import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DiscoverTab = ({ brands }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DiscBrandScreen", { brand: brands }); // Pass the brand data
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={brands.image} style={styles.image} />
      {brands.name === "Show All" ? (
        <Text
          style={{
            position: "absolute",
            bottom: 45,
            left: 45,
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {brands.name}
        </Text>
      ) : null}
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
    shadowOffset: { width: 0, height: 3 },
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
