import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Sellers = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.goBack()}> Sellers</Text>
    </View>
  );
};

export default Sellers;
