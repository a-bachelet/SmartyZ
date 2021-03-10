// Partial Libraries Imports
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faChevronLeft,
  faPencilAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Navigation Imports
import { RootStackParamList } from "../../app/App";

export default function (props: {
  tab: string;
  rootNavigation: StackNavigationProp<RootStackParamList, "Module">;
}) {
  const [editing, setEditing] = useState(false);

  const toggleState = () => setEditing(!editing);

  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={props.rootNavigation.goBack}>
        <FontAwesomeIcon
          style={styles.colorPrimary}
          size={25}
          icon={faChevronLeft}
        />
      </Pressable>
      {editing ? (
        <TextInput
          textContentType="name"
          placeholder="Label"
          style={styles.input}
          // onChangeText={}
          value="Living Room"
        />
      ) : (
        <Text style={styles.title}>Living Room</Text>
      )}
      <Pressable onPress={toggleState}>
        <FontAwesomeIcon
          style={styles.colorPrimary}
          size={25}
          icon={editing ? faCheck : faPencilAlt}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 35,
  },
  colorPrimary: {
    color: "#F5DF4D",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#FEFEFE",
    borderColor: "gray",
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 22,
    textAlign: "center",
    width: "70%",
  },
});
