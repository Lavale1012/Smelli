import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ products }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ProductScreen", { products }); // ✅ pass full product to screen
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: products.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>${products.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D9D7B6",
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
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default ProductCard;
