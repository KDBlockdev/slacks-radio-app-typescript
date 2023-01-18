import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 40,
    padding: 100,
    paddingHorizontal: 16,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
  },
})

const MainLogo = () => {
  return (
    <View>
      <Image style={styles.logo} source={require("../Images/slackslogo.png")} />
    </View>
  );
};

export default MainLogo;
