import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
import Login from "./Screens/Login/LoginScreen";
import TabNavigator from "./navigation/TabNavigator";
import DiscBrandScreen from "./Screens/DiscBrandScreen/DiscBrandScreen";
import DiscProductScreen from "./Screens/Product-discover/DiscProductScreen";
import SettingsIcon from "./components/SettingsIcon";
import SettingsScreen from "./Screens/Settings/SettingsScreen";
``;
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        SourceSerif: require("../assets/fonts/SourceSerif.ttf"),
        SourceSerif2: require("../assets/fonts/SourceSerif2.ttf"),
        SourceSerif3: require("../assets/fonts/SourceSerif4.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{
            headerStyle: {
              backgroundColor: "#FDFBD4",
            },
            headerTitle: "",
            headerLeft: () => (
              <View style={{ paddingLeft: 2, paddingTop: 10 }}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    fontFamily: "SourceSerif3",
                  }}
                >
                  Smelli
                </Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10, paddingTop: 10 }}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    fontFamily: "SourceSerif3",
                  }}
                >
                  <SettingsIcon />
                </Text>
              </View>
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="DiscBrandScreen"
          component={DiscBrandScreen}
          options={({ route }) => {
            const brandColor = route.params?.brand?.color || "#FDFBD4";

            return {
              headerStyle: {
                backgroundColor: brandColor,
              },
              headerTitle: "",
              headerLeft: () => (
                <View style={{ paddingLeft: 2, paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      fontFamily: "SourceSerif3",
                    }}
                  >
                    Smelli
                  </Text>
                </View>
              ),
              headerRight: () => (
                <View style={{ paddingRight: 10, paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      fontFamily: "SourceSerif3",
                    }}
                  >
                    <SettingsIcon />
                  </Text>
                </View>
              ),
              headerShadowVisible: false,
            };
          }}
        />
        <Stack.Screen
          name="DiscProductScreen"
          component={DiscProductScreen}
          options={({ route }) => {
            const brandColor = route.params?.brand?.color || "#FDFBD4";

            return {
              headerStyle: {
                backgroundColor: brandColor,
              },
              headerTitle: "",
              headerLeft: () => (
                <View style={{ paddingLeft: 2, paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      fontFamily: "SourceSerif3",
                    }}
                  >
                    Smelli
                  </Text>
                </View>
              ),
              headerShadowVisible: false,
            };
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={({ route }) => {
            const brandColor = route.params?.brand?.color || "#FDFBD4";

            return {
              headerStyle: {
                backgroundColor: brandColor,
              },
              headerTitle: "",
              headerLeft: () => (
                <View style={{ paddingLeft: 2, paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      fontFamily: "SourceSerif3",
                    }}
                  >
                    Settings
                  </Text>
                </View>
              ),
              headerShadowVisible: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
