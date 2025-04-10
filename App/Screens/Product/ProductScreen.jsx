import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("window").height;

export default function ProductScreen({ route }) {
  const { products } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: products.image }} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.title}>{products.title}</Text>
          <Text style={styles.brand}>{products.brand}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${products.price}</Text>
        </View>
      </View>

      <View style={styles.descriptionWrapper}>
        <ScrollView style={styles.descriptionScroll}>
          <Text style={styles.description}>{products.description}</Text>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.button}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBD4",
  },
  content: {
    alignItems: "center",
    paddingBottom: 40,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 20,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
  },
  brand: {
    fontSize: 18,
    fontStyle: "italic",
    fontFamily: "SourceSerif3",
  },
  priceContainer: {
    justifyContent: "center",
  },
  price: {
    fontSize: 25,
    paddingRight: 10,
    fontFamily: "SourceSerif3",
  },
  descriptionWrapper: {
    width: "90%",
    maxHeight: screenHeight * 0.25,
    marginTop: 20,
    backgroundColor: "#F3F1D4",
    padding: 10,
    borderRadius: 10,
  },
  descriptionScroll: {
    flexGrow: 0,
  },
  description: {
    fontSize: 16,
    fontFamily: "SourceSerif3",
    lineHeight: 22,
    color: "#333",
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#BDB96A",
    color: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 48,
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "SourceSerif3",
    overflow: "hidden",
  },
});
