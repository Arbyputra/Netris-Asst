import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";

const AuthTextInput = (props) => {
  return (
    <View style={{ width: "95%" }}>
      <Text style={{ color: "#000000", fontFamily: "Inter_600SemiBold" }}>
        {props.label}
      </Text>
      <TextInput
        placeholder={props.ph}
        mode="outlined"
        value={props.value}
        onChangeText={props.onChangeText}
        outlineColor="#000000"
        style={{ borderRadius: 20 }}
        theme={{
          roundness: 15,
          colors: {
            primary: "#000000",
            text: "black",
            placeholder: "gray",
            background: "#ffffff",
          },
        }}
      />
    </View>
  );
};

export default AuthTextInput;
