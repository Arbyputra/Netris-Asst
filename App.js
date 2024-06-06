import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider, configureFonts } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import {
  SplashScreen,
  Login,
  Register,
  Nerby,
  Home,
  ProfileScreen,
  EditProfile,
} from "./screens";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import FlashMessage from "react-native-flash-message";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import EditProfil from "./screens/editprofile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const TabList = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == "Home") {
            iconName = focused ? "home" : "home-outline";
            return (
              <CustomTabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            );
          } else if (rn == "Nerby") {
            iconName = focused ? "map-marker" : "map-marker-outline";
            return (
              <CustomTabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            );
          } else if (rn == "ProfileScreen") {
            iconName = focused ? "account" : "account-outline";
            return (
              <CustomTabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            );
          }

          return (
            <>
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
              {/* {rn === "Home" && rn === "ProfileScreen" ? (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              ) : (
                <MaterialIcons name={iconName} size={size} color={color} />
              )} */}
            </>
          );
        },
        tabBarStyle: {
          height: 75,
          paddingTop:10,
          paddingBottom: 10,
        },
      })}
      tabBarOptions={{
        activeTintColor: "#254336",
        inactiveTintColor: "#6B8A7A",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={"Nerby"}
        component={Nerby}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={"ProfileScreen"}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const CustomTabIcon = ({ name, focused, size, color }) => {
  return (
    <View style={styles.tabIconContainer}>
      {focused ? (
        <View
          style={{
            
          }}
        />
      ) : null}
      <MaterialCommunityIcons
        name={name}
        size={30}
        color={color}
        style={styles.tabIcon}
      />
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
        
      >
        <Stack.Screen name={"Splash"} component={SplashScreen} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"EditProfil"} component={EditProfil} />
        <Stack.Screen name={"Register"} component={Register} />
        {/* <Stack.Screen name={"Nerby"} component={Nerby} /> */}
        <Stack.Screen name={"HomeTab"} component={TabList} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  tabIcon: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});