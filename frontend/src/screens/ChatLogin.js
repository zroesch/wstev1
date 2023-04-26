
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { useChatGpt } from "react-native-chatgpt";

const ChatLogin = () => {
  const { login } = useChatGpt();
  return (
    //TODO
    // Change the logo to app logo instead of the chatgpt logo
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../screens/IceCreamDoodle.png")}
      />
      <Headline
        style={{ fontWeight: "bold", alignSelf: "center", marginBottom: 128 }}
      >
        Wste Personal Assistant
      </Headline>
      <Button
        contentStyle={{ height: 56 }}
        labelStyle={{ fontSize: 16 }}
        mode="contained"
        onPress={login}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
  },
  image: {
    alignSelf: "center",
    width: 128,
    height: 128,
    resizeMode: "contain",
    borderRadius: 64,
    marginBottom: 32,
  },
});

export default ChatLogin;