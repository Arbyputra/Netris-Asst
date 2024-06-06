import React, { useState } from "react";
import { View, Text } from "react-native";
import { AuthTextInput, PwdInput, Separator, Button } from "../components";

const EditProfil = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Logika untuk menyimpan perubahan profil
    // Anda bisa melakukan validasi di sini sebelum menyimpan
    console.log("Nama:", nama);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Setelah menyimpan, Anda bisa melakukan navigasi ke halaman lain jika diperlukan
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AuthTextInput
        label={"Nama"}
        ph={"Masukan Nama"}
        value={nama}
        onChangeText={setNama}
      />
      <Separator h={20} />
      <PwdInput
        label={"Kata Sandi Baru"}
        value={password}
        onChangeText={setPassword}
      />
      <Separator h={20} />
      <PwdInput
        label={"Konfirmasi Kata Sandi"}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <View
        style={{
          width: "80%",
          height: "25%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Button
          left={false}
          text={"Ubah"}
          op={() => navigation.navigate("ProfileScreen")}
          full={true}
        />
        <Separator h={20} />
        <Button
    
          left={false}
          text={"kembali"}
          op={() => navigation.navigate("ProfileScreen")}
          full={true}
          style={{ position: "absolute", top: 40, left: 20 }}
        />
      </View>
    </View>
  );
};

export default EditProfil;