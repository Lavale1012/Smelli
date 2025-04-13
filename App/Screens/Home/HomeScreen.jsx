import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import { ScrollView } from "react-native";
import ProductCard from "../../components/ProductCard";
import { fetchData } from "../../utils/fetchData";

const limit = 19;
const URL = `https://fragrance-search-api.onrender.com/api/fragrances?limit=${limit}`;
const HomeScreen = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts([]);
      setIsLoading(true);
      const fetchedProducts = await fetchData(URL);
      setIsLoading(false);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar />
        <View style={styles.gridWrapper}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#333" />
            </View>
          ) : null}

          {products.map((product, index) => (
            <View key={index} style={styles.gridItem}>
              <ProductCard products={product} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FDFBD4",
    paddingBottom: 100,
  },
  searchWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#FDFBD4",
  },
  gridWrapper: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "50%", // Adjust to fit two items per row with spacing
  },
  loadingContainer: {
    flex: 1,
    padding: 20,
    fontSize: 18,
    alignItems: "center", // Center the text horizontally
    marginTop: "55%", // Center the text vertically
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
    fontFamily: "SourceSerif3",
  },
});
