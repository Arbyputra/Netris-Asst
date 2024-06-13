import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";

const AuthTextInput = (props) => {
  return (
    <View style={{ width: "95%" }}>
      <Text style={{ color: "#254336", fontFamily: "Inter_600SemiBold" }}>
        {props.label}
      </Text>
      <TextInput
        placeholder={props.ph}
        mode="outlined"
        value={props.value}
        onChangeText={props.onChangeText}
        outlineColor="#254336"
        style={{ borderRadius: 20 }}
        theme={{
          roundness: 15,
          colors: {
            primary: "#B7B597",
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
