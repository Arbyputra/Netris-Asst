import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";

const Button = (props) => {
  const buttonBackgroundColor = props.backgroundColor || "#254336"; 

  return (
    <>
      {props.left === true ? (
        <TouchableOpacity
          onPress={props.op}
          style={{
            backgroundColor: buttonBackgroundColor,
            width: "95%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name={props.iconName} color={"white"} size={25}></Icon>
          </View>
          <View
            style={{ flex: 6, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Inter_600SemiBold",
                fontSize: 17,
                marginLeft: -35,
              }}
            >
              {props.text}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={props.op}
          style={{
            backgroundColor: buttonBackgroundColor,
            width: props.full === true ? "100%" : "95%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: props.bgs === true ? "#000000" : "white",
              fontFamily: "Inter_600SemiBold",
              fontSize: 17,
            }}
          >
            {props.text}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;