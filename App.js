import React, { useState } from "react";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SocialIcon } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { FontAwesome } from "@expo/vector-icons";
import profileImage from "./assets/profileImage.png";
import profilepicture2 from "./assets/profilepicture2.jpg";
import axios from "axios";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HandleGoogleLogin = () => {
  const config = () => {};
};

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={{
          height: 50,
          width: 380,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        }}
        placeholder="Password"
      />
      <TextInput
        style={{
          height: 50,
          width: 380,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        }}
        placeholder="Username"
      />

      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Profile");
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
    </View>
  );
};

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        Already Registered ?
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "blue" }}> Log In</Text>
        </TouchableOpacity>
      </Text>
      <TextInput
        style={{
          height: 50,
          width: 380,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        }}
        placeholder="Email"
      />
      <TextInput
        style={{
          height: 50,
          width: 380,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        }}
        placeholder="Username"
      />
      <TextInput
        style={{
          height: 50,
          width: 380,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        }}
        placeholder="Password"
      />
      <Text>Register</Text>
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
    </View>
  );
};

const Home = () => {
  const [Content, setContent] = useState("");
  const [Author, setAuthor] = useState("");

  const options = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "e98643135dmsh61aedcbbcd5af07p1ff8fejsne1869d94f0a4",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setContent(response.data.content);
      setAuthor(response.data.originator.name);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          options;
        }}
      >
        <Text>call api </Text>
      </TouchableOpacity>
      <View>
        <Text>{Content}</Text>
        <Text>{Author}</Text>
      </View>
    </View>
  );
};
const Trending = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Songs for you</Text>
    </View>
  );
};

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};
const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
};
const Upload = () => {
  return (
    <View style={styles.container}>
      <Text>upload your music </Text>
    </View>
  );
};
const Playlist = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ alignItems: "flex-end" }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <FontAwesome name="bars" size={35} color="black" />
      </TouchableOpacity>
      <ImageBackground
        source={profileImage}
        style={{ width: 100, height: 100 }}
      >
        <Image
          source={profilepicture2}
          style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
        ></Image>
      </ImageBackground>
      <Text>Profile</Text>
    </View>
  );
};
const myStats = () => {
  return (
    <View>
      <Text>most played song of the week</Text>
      <Text>most played song of the month</Text>
      <Text>most played song of the year</Text>
    </View>
  );
};
const Logout = () => {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "play-circle" : "play-circle";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell";
          } else if (route.name === "Upload") {
            iconName = focused ? "plus-circle" : "plus-circle";
          } else if (route.name === "Playlist") {
            iconName = focused ? "microphone" : "microphone";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Playlist" component={Playlist} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name=" Home" component={TabNavigator} />

      <Drawer.Screen name=" Trending" component={Trending} />
      <Drawer.Screen name="myStats" component={myStats} />

      <Drawer.Screen name=" Logout" component={Logout} />
    </Drawer.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen name="Profile" component={DrawerNavigator} />

      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
