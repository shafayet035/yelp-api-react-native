import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const { params } = useRoute();

  console.log(params);

  return (
    <View>
      <Text>Information</Text>
    </View>
  );
};

export default Detail;
