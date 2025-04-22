// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import DiscoverScreen from "../Screens/Discover/DiscoverScreen";
import ChatScreen from "../Screens/chat/ChatScreen";
import ProductScreen from "../Screens/Product/ProductScreen";
import DiscBrandScreen from "../Screens/DiscBrandScreen/DiscBrandScreen";
import DiscProductScreen from "../Screens/Product-discover/DiscProductScreen";
import SettingsScreen from "../Screens/Settings/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} />
      <HomeStack.Screen name="DiscBrandScreen" component={DiscBrandScreen} />
      <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#BDB96A",
          position: "absolute",
          height: 70,
          borderRadius: 48,
          marginBottom: 25,
          marginHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 6.27,
          elevation: 10,
          paddingTop: 13,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#D9D7B6" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? "#D9D7B6" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubbles"
              size={24}
              color={focused ? "#D9D7B6" : "#fff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
