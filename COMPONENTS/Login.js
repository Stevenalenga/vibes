import React from "react";
import * as GoogleSignIn from "expo-google-sign-in";

import {
  Text,
  ImageBackground,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import headphones from "../assets/images/headphones.jpg";

const Login = ({ navigation }) => {
  return (
    <ImageBackground
      source={headphones}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.text}> welcome to Just Listen </Text>

      <TextInput placeholder="enter username" style={styles.textinput} />

      <TextInput placeholder="password" style={styles.textinput} />

      <Button
        title="Login"
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Text>not signed up?</Text>

      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          alignSelf: "center",
          justifyContent: "center",
        }}
      />
      <TouchableOpacity>
        <SocialIcon
          title={"Sign In With Facebook"}
          button={true}
          type={"facebook"}
        />
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity>
        <SocialIcon
          title={"Sign In With Google"}
          button={true}
          type={"google"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        backgroundColor="blue"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={{ margin: 20, color: "blue" }}> Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 21,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  centerText: {
    textAlign: "auto",
  },
  textinput: {
    height: 45,
    margin: 14,
    borderWidth: 2,
    padding: 2,
  },
  buttons: {
    backgroundColor: "blue",
    margin: 14,
    padding: 20,
    borderRadius: 5,
  },
});

export default Login;
