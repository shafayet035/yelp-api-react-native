import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantDetail = ({ item }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: item.image_url }} />
      <Text style={style.regularText}>{item.name}</Text>
      <Text style={style.regularText}>
        Rating: {item.rating} from: {item.review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowOpacity: 0.04,
    shadowRadius: 50,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  regularText: {
    marginVertical: 3,
  },
});

export default RestaurantDetail;
