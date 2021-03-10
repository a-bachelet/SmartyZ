// Partial Libraries Imports
import { Pressable, Text, View } from "react-native";

// Full Libraries Imports
import React from "react";
import {
  faChevronRight,
  faCircle,
  faThermometerHalf,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default () => {
  const goToModule = (id: number) => {
    console.log(id);
  };

  return (
    <View
      style={{
        borderRadius: "25px",
        height: "70px",
        alignItems: "left",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
        justifyContent: "center",
        marginTop: "25px",
        marginLeft: "14px",
        marginRight: "14px",
      }}
    >
      <Pressable onPress={() => goToModule(2)}>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            padding: "20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

            <FontAwesomeIcon style={{ color: "#2ECC71" }} icon={faCircle} />
   
            <Text style={{}}>Module 2</Text>
        
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "#F5DF4D" }}
              size={25}
              icon={faThermometerHalf}
            />
            <Text>22°C</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "#F5DF4D" }}
              size={25}
              icon={faTint}
            />
            <Text>24%</Text>
          </View>

          <FontAwesomeIcon
            style={{ color: "#F5DF4D" }}
            size={25}
            icon={faChevronRight}
          />
        </View>
      </Pressable>
    </View>
  );
};
