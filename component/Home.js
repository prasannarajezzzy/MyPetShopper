import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard"; // Make sure to create this component

const HomeScreen = () => {
  // Static product data, replace with your actual API fetch if needed
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "iPhone 14 Pro Max",
      description: "Latest model with advanced features",
      price: 1000,
      ratings: 0,
      images: [
        {
          public_id: "ByteProducts/ql23ouxprps3ygmzhdun",
          url: "http://res.cloudinary.com/dvgltz0vl/image/upload/v1714024974/ByteProducts/ql23ouxprps3ygmzhdun.jpg",
          _id: "6629f20f8a9ac8d92e1ae187",
        },
      ],
    },
    {
      _id: "2",
      name: "iPhone 14 Pro Max",
      description: "Latest model with advanced features",
      price: 1000,
      ratings: 0,
      images: [
        {
          public_id: "ByteProducts/ql23ouxprps3ygmzhdun",
          url: "http://res.cloudinary.com/dvgltz0vl/image/upload/v1714024974/ByteProducts/ql23ouxprps3ygmzhdun.jpg",
          _id: "6629f20f8a9ac8d92e1ae187",
        },
      ],
    },
    {
      _id: "3",
      name: "iPhone 14 Pro Max",
      description: "Latest model with advanced features",
      price: 1000,
      ratings: 0,
      images: [
        {
          public_id: "ByteProducts/ql23ouxprps3ygmzhdun",
          url: "http://res.cloudinary.com/dvgltz0vl/image/upload/v1714024974/ByteProducts/ql23ouxprps3ygmzhdun.jpg",
          _id: "6629f20f8a9ac8d92e1ae187",
        },
      ],
    },
    {
      _id: "4",
      name: "iPhone 14 Pro Max",
      description: "Latest model with advanced features",
      price: 1000,
      ratings: 0,
      images: [
        {
          public_id: "ByteProducts/ql23ouxprps3ygmzhdun",
          url: "http://res.cloudinary.com/dvgltz0vl/image/upload/v1714024974/ByteProducts/ql23ouxprps3ygmzhdun.jpg",
          _id: "6629f20f8a9ac8d92e1ae187",
        },
      ],
    },
    // Add more products here as needed
  ]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <ProductCard product={item} />}
      numColumns={2} // Set the number of columns for the grid
      columnWrapperStyle={styles.column}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f4f4f8",
  },
  column: {
    justifyContent: "space-between",
  },
});

export default HomeScreen;
