import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, setSearchTerm, placeHolder }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeHolder} value={searchTerm} onChangeText={setSearchTerm} />
      <Feather style={styles.icon} name="search" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    padding: 10,
  },
});

export default SearchBar;
