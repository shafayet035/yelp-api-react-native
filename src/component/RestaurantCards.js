import React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import RestaurantDetail from "./RestaurantDetail";
import { useNavigation } from "@react-navigation/native";

const RestaurantCards = ({ items, title }) => {
  const navigation = useNavigation();

  if (!items.length > 0) return null;
  return (
    <View style={style.contianer}>
      <Text style={style.title}>{title}</Text>
      <FlatList
        style={style.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(items) => items.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })}>
            <RestaurantDetail item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  span: {
    fontSize: 10,
  },
  contianer: {
    marginVertical: 5,
  },
  list: {
    paddingVertical: 10,
  },
});

export default RestaurantCards;
