import { View, Text } from "react-native";
import React from "react";
import { Profile, Button, Separator } from "../components";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 55, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Profile name={"Farrel Ardan"} />
      </View>
      <Separator h={20} />
      <Button
        left={false}
        text={"Keluar"}
        op={() => navigation.navigate("Login")}
        full={true}
      />
    </View>
  );
};

export default ProfileScreen;