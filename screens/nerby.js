import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Button,
  TextInput, // Tambahan
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Rating } from "react-native-ratings";
import Modal from 'react-native-modal';
import Separator from './Separator'; // Pastikan jalur relatif sesuai

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  ratingBackground: {
    backgroundColor: "#DCCDE5",
    padding: 10,
    borderRadius: 10,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    padding: 10,
    borderColor: '#A7A7A7',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    padding: 10,
    borderColor: '#A7A7A7',
    borderWidth: 1,
    borderRadius: 5,
  },
  searchHistoryContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A7A7A7',
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 100,
    marginTop: 5,
    padding: 10,
  },
  searchHistoryItem: {
    padding: 5,
  }
});

const Nerby = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [chooseItem, setChooseItem] = useState(0);
  const [ratings, setRatings] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [temporaryRating, setTemporaryRating] = useState(0);
  const [searchText, setSearchText] = useState(""); // Tambahan
  const [searchHistory, setSearchHistory] = useState([]); // Tambahan

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
  }, []);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const listTambalBan = [
    { id: 0, nama: "Tambal ban cak imin", tipe: "Bengkel motor", alamat: "Jl bareng cuma temen" },
    { id: 1, nama: "Tambal ban jetis kulon", tipe: "Bengkel motor", alamat: "Jl bareng cuma temen" },
    { id: 2, nama: "Tambal ban mas bro", tipe: "Bengkel motor", alamat: "Jl bareng cuma temen" },
    { id: 3, nama: "Tambal ban sis", tipe: "Bengkel mobil", alamat: "Jl bareng cuma temen" },
    { id: 4, nama: "Tambal ban pak dono", tipe: "Bengkel mobil", alamat: "Jl bareng cuma temen" },
    { id: 5, nama: "Tambal ban banjaya", tipe: "Bengkel motor", alamat: "Jl bareng cuma temen" },
    { id: 6, nama: "Tambal ban barokah", tipe: "Bengkel motor", alamat: "Jl jlan lah woi" },
  ];

  const handleRatingCompleted = (rating) => {
    setTemporaryRating(rating);
  };

  const saveRating = () => {
    if (selectedItem) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [selectedItem.id]: temporaryRating,
      }));
      setModalVisible(false);
    }
  };

  const openRatingModal = (item) => {
    setSelectedItem(item);
    setTemporaryRating(ratings[item.id] || 0);
    setModalVisible(true);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim().length > 0) {
      setSearchHistory((prevHistory) => [text, ...prevHistory.filter(h => h !== text)]);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setChooseItem(item.id);
          openRatingModal(item);
        }}
        style={{
          height: windowHeight * 0.22,
          width: windowWidth * 0.8,
          borderRadius: 10,
          backgroundColor: item.id === chooseItem ? "#DCCDE5" : "#FFFFFF",
          borderWidth: 2,
          borderColor: "#A7A7A7",
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
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
          <View style={{ height: 3 }} />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
            }}
          >
            {item.tipe}
          </Text>
          <View style={{ height: 3 }} />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
            }}
          >
            {item.alamat}
          </Text>
          <View style={{ height: 5 }} />
          <View style={styles.ratingBackground}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              showRating={false}
              readonly
              startingValue={ratings[item.id] || 0}
            />
          </View>
        </View>
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
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Cari tambal ban..."
            style={styles.searchInput}
            value={searchText}
            onChangeText={handleSearch}
          />
          {searchHistory.length > 0 && (
            <View style={styles.searchHistoryContainer}>
              {searchHistory.map((historyItem, index) => (
                <TouchableOpacity key={index} onPress={() => setSearchText(historyItem)}>
                  <Text style={styles.searchHistoryItem}>{historyItem}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <FlatList
          data={listTambalBan.filter(item => 
            item.nama.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Rate {selectedItem?.nama}</Text>
          <View style={styles.ratingBackground}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={40}
              showRating
              onFinishRating={handleRatingCompleted}
              startingValue={temporaryRating}
            />
          </View>
          <Button title="Save" onPress={saveRating} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Nerby;
