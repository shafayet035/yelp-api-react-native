import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getRestaurant } from "../services/yelpApi";

const Detail = () => {
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);

  const { params } = useRoute();

  useEffect(() => {
    setLoading(false);
    getRestaurant(params.id).then((res) => {
      setRestaurant(res);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {!loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={style.headerImage} source={{ uri: restaurant.image_url }} />
          <Text style={style.title}>{restaurant.name}</Text>
          <Text style={style.subTitle}>About:</Text>
          <Text style={style.normalText}>Price: {restaurant.price}</Text>
          <Text style={style.normalText}>Rating: {restaurant.rating}</Text>
          <Text style={style.normalText}>Review Count: {restaurant.review_count}</Text>
          <Text style={style.normalText}>Phone: {restaurant.display_phone}</Text>
          <Text style={style.normalText}>
            Address: {restaurant?.location?.address1}, {restaurant?.location?.zip_code}, {restaurant?.location?.city}
          </Text>

          <FlatList
            style={style.imageListContainer}
            showsHorizontalScrollIndicator={false}
            data={restaurant.photos}
            keyExtractor={(photo) => photo}
            horizontal
            renderItem={({ item }) => <Image style={style.listImage} source={{ uri: item }} />}
          />
        </ScrollView>
      )}
    </>
  );
};

const style = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 20,
    margin: 10,
  },
  normalText: {
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 1,
  },
  listImage: {
    width: 200,
    height: 180,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imageListContainer: {
    marginVertical: 20,
  },
});

export default Detail;
