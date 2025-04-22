import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import DiscProductCard from "../../components/DiscProductCard";
import { fetchData } from "../../utils/fetchData";
import BackButton from "../../components/BackButton";

const DiscBrandScreen = ({ route }) => {
  const { brand } = route.params || {};

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL =
    brand.name == "Show All"
      ? `https://fragrance-search-api.onrender.com/api/fragrances?limit=19`
      : `https://fragrance-search-api.onrender.com/api/fragrances/brand?brand=${brand?.name}`;

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts([]);
      setIsLoading(true);
      const fetchedProducts = await fetchData(URL);
      setIsLoading(false);
      setProducts(fetchedProducts);
    };
    if (brand?.name) {
      fetchProducts();
    }
  }, [brand?.name]);

  return (
    <View style={{ flex: 1, backgroundColor: brand?.color || "#FDFBD4" }}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchWrapper}>
          <SearchBar brand={brand} />

          <Text style={styles.brandTitle}>{brand?.name}</Text>

          <View style={styles.gridWrapper}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#333" />
              </View>
            ) : (
              products.map((product, index) => (
                <View key={index} style={styles.gridItem}>
                  <DiscProductCard products={product} brand={brand} />
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscBrandScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  searchWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 15,
    fontFamily: "SourceSerif3",
  },
  gridWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "50%",
  },
  loadingContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
});
