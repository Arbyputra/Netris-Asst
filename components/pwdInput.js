import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const PwdInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ width: "95%" }}>
      <Text style={{ color: "#254336", fontFamily: "Inter_600SemiBold" }}>
        {props.label}
      </Text>
      <TextInput
        secureTextEntry={!showPassword}
        placeholder="Masukan Kata Sandi"
        right={
          <TextInput.Icon
            color={"#254336"}
            onPress={togglePasswordVisibility}
            icon={showPassword ? "eye-off" : "eye"}
          />
        }
        mode="outlined"
        value={props.value}
        onChangeText={props.onChangeText}
        outlineColor="#254336"
        style={{ borderRadius: 20 }}
        theme={{
          roundness: 15,
          colors: {
            primary: "#254336",
            text: "black",
            placeholder: "gray",
            background: "#ffffff",
          },
        }}
      />
    </View>
  );
};

export default PwdInput;
