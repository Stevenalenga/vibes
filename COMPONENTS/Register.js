import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import starry from "../assets/images/starry.jpg";

const Register = () => {
  return (
    <ImageBackground source={starry} resizeMode="cover" style={styles.image}>
      <Text style={styles.Text}>sign up here</Text>

      <TextInput placeholder="enter username" style={styles.textinput} />
      <TextInput
        placeholder="enter PhoneNumber or email "
        style={styles.textinput}
      />
      <TextInput placeholder="password" style={styles.textinput} />
      <TextInput placeholder="re-enter password" style={styles.textinput} />

      <Button style={styles.buttons} title="submit" />
      <Button
        style={styles.buttons}
        title="click here to sign up with Google"
        onPress={() => {
          console.log("welcome to Google");
        }}
      />
      <Button
        style={styles.buttons}
        title="click here to sign up with facebook"
        onPress={console.log("welcome to Facebook")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
  },
  image: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    height: 40,
    margin: 12,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    backgroundColor: "blue",
    margin: 14,
    padding: 20,
    borderRadius: 5,
  },
});
export default Register;
