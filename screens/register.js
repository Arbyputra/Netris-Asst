import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            color: "#000000",
            fontSize: 50,
          }}
        >
          Daftar
        </Text>
        {/* <Text
          style={{
            fontFamily: "Inter_400Regular",
            color: "#774494",
            fontSize: 15,
          }}
        >
          Create account here
        </Text> */}
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AuthTextInput label={"Nama Lengkap"} ph={"Masukan Nama"} />
        <Separator h={20} />
        <AuthTextInput label={"Email"} ph={"Masukan Email"} />
        <Separator h={20} />
        <PwdInput label={"Kata Sandi"} />
        <Separator h={20} />
        <PwdInput label={"Masukan Ulang Kata Sandi"} />
      </View>
      <View
        style={{ flex: 1.6, justifyContent: "center", alignItems: "center"}}
      >
        <Button left={false} text={"Daftar"} />
        <Separator h={15} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              color: "#000000",
              fontSize: 15,
            }}
          >
            Apakah sudah punya akun?
          </Text>
          <Separator w={4} />
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              color: "#000000",
              fontSize: 16,
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
