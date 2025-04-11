import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";
import { ScrollView } from "react-native";
import ProductCard from "../../components/ProductCard";

const HomeScreen = () => {
  // This is dummy data just for demonstration
  const products = [
    {
      image:
        "https://res.cloudinary.com/dkiiqxr14/image/upload/v1735452145/s719260-main-zoom_n9du3p.jpg",
      title: "No 5",
      price: 99.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      brand: "Chanel",
      Notes: {
        top: "Citrus",
        middle: "Floral",
        base: "Woody",
      },
      consintation: "EPT",
      season: "Spring, Summer",
    },
    {
      image:
        "https://res.cloudinary.com/dkiiqxr14/image/upload/v1735452145/s719260-main-zoom_n9du3p.jpg",
      title: "No 6",
      price: 89.99,
      description: "A refreshing and vibrant scent perfect for everyday wear.",
      brand: "Chanel",
      Notes: {
        top: "Citrus",
        middle: "Floral",
        base: "Woody",
      },
      consintation: "EPT",
      season: "Spring, Summer",
    },
    {
      image:
        "https://res.cloudinary.com/dkiiqxr14/image/upload/v1735452145/s719260-main-zoom_n9du3p.jpg",
      title: "No 7",
      price: 79.99,
      description: "A bold and spicy fragrance for special occasions.",
      brand: "Chanel",
      Notes: {
        top: "Citrus",
        middle: "Floral",
        base: "Woody",
      },
      consintation: "EPT",
      season: "Spring, Summer",
    },
    {
      image:
        "https://res.cloudinary.com/dkiiqxr14/image/upload/v1735452145/s719260-main-zoom_n9du3p.jpg",
      title: "No 8",
      price: 69.99,
      description: "A light and airy scent with hints of citrus and vanilla.",
      brand: "Chanel",
      Notes: {
        top: "Citrus",
        middle: "Floral",
        base: "Woody",
      },
      consintation: "EPT",
      season: "Spring, Summer",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <View style={styles.gridWrapper}>
        {products.map((products, index) => (
          <View key={index} style={styles.gridItem}>
            <ProductCard products={products} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBD4",
  },
  searchWrapper: {
    paddingTop: 20, // Adjust for safe area / notch
    paddingHorizontal: 20,
    backgroundColor: "#FDFBD4",
    alignItems: "center",
  },
  gridWrapper: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "49%", // Adjust to fit two items per row with spacing
  },
});
