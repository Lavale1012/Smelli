import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import BackButton from "../../components/BackButton";

const screenHeight = Dimensions.get("window").height;

export default function ProductScreen({ route }) {
  const { products } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.backBttnCOntainer}>
        <BackButton />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: products.imagesUrl.image1 }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.name}>{products.name}</Text>
          <Text style={styles.brand}>{products.brand}</Text>
          <Text style={styles.brand}>{products.gender}</Text>
          <Text style={styles.brand}>{products.concentration}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${products.price}</Text>
          <Text style={styles.brand}>{products.size}</Text>
        </View>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <ScrollView style={styles.descriptionScroll}>
          <Text style={styles.description}>{products.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.notesContainer}>
        <Text style={styles.notesTitle}>Notes</Text>
        <Text style={styles.notesText}>
          Top: {products.notes?.top?.join(", ") || "N/A"}
        </Text>
        <Text style={styles.notesText}>
          Middle: {products.notes?.middle?.join(", ") || "N/A"}
        </Text>
        <Text style={styles.notesText}>
          Base: {products.notes?.base?.join(", ") || "N/A"}
        </Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionTitle}>Season</Text>
        <Text style={styles.description}>{products.season.join(", ")}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => {
          const url = products.purchaseLink;
          if (url) {
            Linking.openURL(url).catch((err) =>
              console.error("Failed to open URL:", err)
            );
          }
        }}
      >
        <Text style={styles.button}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBD4",
    height: "100%",
  },
  content: {
    alignItems: "center",
    paddingBottom: 100,
  },
  imageContainer: {
    marginTop: 20,

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
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
  },
  brand: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "SourceSerif3",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
  },
  priceContainer: {
    // justifyContent: "center",
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
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
    marginBottom: 10,
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
  backBttnCOntainer: {
    flex: 1,
    alignSelf: "flex-start",
    paddingLeft: 15,
  },
  notesContainer: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#F3F1D4",
    padding: 10,
    borderRadius: 10,
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "SourceSerif3",
    marginBottom: 10,
  },
  notesText: {
    fontSize: 16,
    fontFamily: "SourceSerif3",
    marginBottom: 5,
  },
});
