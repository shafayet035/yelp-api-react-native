import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import RestaurantCards from "../component/RestaurantCards";

import SearchBar from "../component/SearchBar";
import { getRestaurants } from "../services/yelpApi";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getRestaurants(searchTerm).then((response) => setResults(response));
  }, [searchTerm]);

  const filterResult = (range) => {
    return results.filter((item) => item.price === range);
  };

  return (
    <View style={{ flex: 1, paddingBottom: 20, backgroundColor: "#EFF3F8" }}>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} placeHolder="Search by Name" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantCards items={filterResult("$")} title="Affordable" />
        <RestaurantCards items={filterResult("$$")} title="Expensive" />
        <RestaurantCards items={filterResult("$$$")} title="Premium" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
