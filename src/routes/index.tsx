import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";

// Pages
import Home from "../pages/home/index";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#7059b1" }} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName={"dashboard"}>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
