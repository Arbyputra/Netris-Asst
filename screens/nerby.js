import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  Modal,
} from "react-native";

import { Separator} from "../components";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "#254336",
    position: "absolute",
    bottom: 10,
    right: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  searchBox: {
    position: "absolute",
    top: 50,
    width: "90%",
    height: "8%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 30,
    padding: 10,
    paddingStart: 25,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 4,
    padding: 0,
    margin: 0,
  },
  modalText: {
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

const Nerby = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [chooseItem, setChooseItem] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [thankYouModalVisible, setThankYouModalVisible] = useState(false);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      } catch (error) {
        setError("Error getting user location: " + error);
      }
    };
    fetchCurrentLocation();
  });

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const listTambalBan = [
    {
      id: 0,
      nama: "Tambal Ban Cak Imin",
      tipe: "Bengkel motor",
      alamat: "Jl. Ketintang",
    },
    {
      id: 1,
      nama: "Tambal Ban Jetis Kulon",
      tipe: "Bengkel Motor",
      alamat: "Jl. Ketintang",
    },
    {
      id: 2,
      nama: "Tambal Ban Mas Bro",
      tipe: "Bengkel Motor",
      alamat: "Jl. Ketintang",
    },
    {
      id: 3,
      nama: "Tambal Ban Sis",
      tipe: "Bengkel Mobil",
      alamat: "Jl. Ketintang",
    },
    {
      id: 4,
      nama: "Tambal Ban Pak Dono",
      tipe: "Bengkel mobil",
      alamat: "Jl. Ketintang",
    },
    {
      id: 5,
      nama: "Tambal Ban Banjaya",
      tipe: "Bengkel motor",
      alamat: "Jl. Ketintang",
    },
    {
      id: 6,
      nama: "Tambal Ban barokah",
      tipe: "Bengkel motor",
      alamat: "Jl. Ketintang",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setChooseItem(item.id);
        }}
        style={{
          height: windowHeight * 0.22,
          width: windowWidth * 0.8,
          // borderRadius: 10,
          backgroundColor: index === chooseItem ? "#DCCDE5" : "#FFFFFF",
          borderWidth: 2,
          borderColor: "#A7A7A7",
          marginHorizontal: 10,
          marginVertical: 25,
          borderRadius: 30,
        }}
      >
        <View style={{ flex: 1 }}>
        <Image
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
            source={require("../assets/tambalBan.jpg")}
          />
        </View>
        <View style={{ flex: 1.3, paddingLeft: 10, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 16,
              color: "#5A1781",
            }}
          >
            {item.nama}
          </Text>
          <Separator h={3} />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
              // color: "#774494",
            }}
          >
            {item.tipe}
          </Text>
          <Separator h={3} />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
              // color: "#774494",
            }}
          >
            {item.alamat}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Ulas</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <MapView
          showsUserLocation={true}
          showsCompass={true}
          initialRegion={{
            latitude: parseFloat(-7.3385169),
            longitude: parseFloat(112.719163),
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          style={{ width: "100%", height: "100%" }}
        >
           
        </MapView>
        <View style={styles.searchBox}>
            <TextInput
              style={styles.input}
              placeholder="Cari"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
               <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {
                // handle search functionality here
                console.log("Searching for:", searchQuery);
              }}
            >
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
            </View>
      </View>
      <View
        style={{ flex: 1.3, justifyContent: "center", alignItems: "center" }}
      >
        <FlatList
          data={listTambalBan}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <FontAwesome name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Rating Tambal Ban Kamu</Text>
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <FontAwesome
                    name={star <= rating ? "star" : "star-o"}
                    size={30}
                    color="#ffd700"
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                // Show thank you modal
                setThankYouModalVisible(true);
                // Set timeout to close thank you modal after 2 seconds
                setTimeout(() => {
                  setThankYouModalVisible(false);
                }, 2000);
              }}
            >
              <Text style={styles.textStyle}>Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={thankYouModalVisible}
        onRequestClose={() => {
          setThankYouModalVisible(!thankYouModalVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Terima Kasih Atas Ulasan Anda</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Nerby;
