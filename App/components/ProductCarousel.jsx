import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const { width } = Dimensions.get("window");
const ProductCarousel = ({ images }) => {
  return (
    <Carousel
      loop
      width={width - 40}
      height={350}
      data={images}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "fill",
  },
});

export default ProductCarousel;
