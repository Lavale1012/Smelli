import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DiscProductCard = ({ products, brand }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("Navigating with brand:", brand);
    navigation.navigate("DiscProductScreen", { products, brand }); // ✅ pass full product to screen
  };

  return (
    <TouchableOpacity
      style={[{ backgroundColor: brand?.color || "#D9D7B6" }, styles.card]}
      onPress={handlePress}
    >
      <Image source={{ uri: products.imagesUrl.image1 }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{products.name}</Text>
        <Text style={styles.price}>${products.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "#D9D7B6",
    padding: 12,
    borderRadius: 20,
    margin: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "SourceSerif3",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
  },
});

export default DiscProductCard;
