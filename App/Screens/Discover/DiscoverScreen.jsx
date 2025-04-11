import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";
import DiscoverTab from "../../components/DiscoverTab";

const DiscoverScreen = () => {
  const brands = [
    { id: 1, name: "Dior", image: require("../../../assets/dior.png") },
    { id: 2, name: "Tom Ford", image: require("../../../assets/tomford.png") },
    { id: 3, name: "Chanel", image: require("../../../assets/chanel.jpg") },
    { id: 4, name: "Azzaro", image: require("../../../assets/azzaro.jpg") },
    { id: 5, name: "Givenchy", image: require("../../../assets/givenchy.jpg") },
    { id: 6, name: "Gucci", image: require("../../../assets/gucci.jpg") },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <View>
        <Text style={styles.contentTitle}>Brands</Text>
        <View style={styles.grid}>
          {brands.map((brand) => (
            <DiscoverTab key={brand.id} brands={brand} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFBD4",
    height: "100%",
  },
  searchWrapper: {
    paddingTop: 20, // Adjust for safe area / notch
    paddingHorizontal: 20,
    backgroundColor: "#FDFBD4",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    paddingHorizontal: 20,
    fontFamily: "SourceSerif3",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 14,
  },
});
