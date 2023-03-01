import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image} from "react-native";
import * as React from "react";

const ArchiveScreen = () => {
return (
<View style={styles.container}>
<View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../Images/SlacksTextWhite.png")} />
          </View>
<TouchableOpacity
style={styles.buttonContainer}
onPress={() => {
Linking.openURL("https://soundcloud.com/slacksradio");
}}
>
<Text style={styles.buttonText}>Click here to browse our show archive!</Text>
</TouchableOpacity>
</View>
);
};

export default ArchiveScreen;

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
backgroundColor: "#CCCCFF",
},
buttonContainer: {
backgroundColor: "#6b3d91",
paddingVertical: 10,
marginTop: 20,
alignSelf:'center',
borderRadius: 10,
shadowColor: "#6b3d91",
shadowOffset: {
width: 0,
height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,
elevation: 6,
},
buttonText: {
textAlign: "center",
color: "white",
fontWeight: "bold",
},
bottomBar: {
flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#CCCCFF",
},
logoContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? '50%' : '40%',
    resizeMode: "contain",
  },
});