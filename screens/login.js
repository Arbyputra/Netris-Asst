import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Separator, Button, AuthTextInput, PwdInput } from "../components";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
});

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            color: "#000000",
            fontSize: 50,
          }}
        >
          Masuk
        </Text>
        
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <AuthTextInput label={"Email"} ph={"Masukkan E-Mail"}/>
        <Separator h={20} />
        <PwdInput label={"Kata Sandi"} />
        <Separator h={20} />
      </View>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Button
          left={false}
          text={"Masuk"}
          op={() => navigation.navigate("HomeTab")}
        />
        <Separator h={15} />
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 14,
            color: "#737373",
          }}
        >
          Or
        </Text>
        <Separator h={15} />
        <Button left={true} text={" Lanjutkan Dengan Google"} iconName={"google"} />
        <Separator h={20} />
        <Button
          left={true}
          text={"Lanjutkan Dengan Facebook"}
          iconName={"facebook-square"}
        />
      </View>
    </View>
  );
};

export default Login;
