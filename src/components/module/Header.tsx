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
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Navigation Imports
import { RootStackParamList } from "../../app/App";
import { ParamListBase } from "@react-navigation/native";

const tabs: (
  currentTab: string,
  tabNavigation: StackNavigationProp<ParamListBase>
) => JSX.Element[] = (currentTab, tabNavigation) => {
  return ["Status", "Analytics", "Alerts"].map((tab: string) => {
    const active: boolean = tab === currentTab;
    return (
      <Pressable
        key={tab}
        style={[styles.link, active ? styles.linkActive : {}]}
        onPress={() => {
          tabNavigation.push(tab);
        }}
      >
        <Text style={[styles.linkText, active ? styles.linkTextActive : {}]}>
          {tab}
        </Text>
      </Pressable>
    );
  });
};

export default function (props: {
  tab: string;
  rootNavigation: StackNavigationProp<RootStackParamList, "Module">;
  navigation: StackNavigationProp<ParamListBase>;
  name: string;
  code: string;
}) {
  const [editing, setEditing] = useState(false);
  const [nameValue, setNameValue] = useState(props.name);

  const toggleEditing = () => setEditing(!editing);

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.topMenuContainer}>
          <Pressable onPress={props.rootNavigation.goBack}>
            <FontAwesomeIcon
              style={styles.colorPrimary}
              size={25}
              icon={faChevronLeft}
            />
          </Pressable>
          <View style={styles.titleContainer}>
            {editing ? (
              <TextInput
                textContentType="name"
                placeholder="Label"
                style={styles.input}
                onChangeText={setNameValue}
                value={nameValue}
              />
            ) : nameValue ? (
              <Text style={styles.title}>{nameValue}</Text>
            ) : (
              <></>
            )}
            <Text style={styles.colorPrimary}>#{props.code}</Text>
          </View>
          <Pressable onPress={toggleEditing}>
            <FontAwesomeIcon
              style={styles.colorPrimary}
              size={25}
              icon={editing ? faCheck : faPencilAlt}
            />
          </Pressable>
        </View>
        <SafeAreaView style={styles.bottomMenuContainer}>
          {tabs(props.tab, props.navigation)}
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3B3B3B",
    flexDirection: "column",
  },
  topMenuContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  bottomMenuContainer: {
    alignItems: "center",
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 25,
    height: 60,
  },
  colorPrimary: {
    color: "#F5DF4D",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "column",
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
  link: {
    color: "#ABABAB",
    opacity: 0.75,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "400",
  },
  linkActive: {
    color: "#3D3D3D",
    opacity: 1,
  },
  linkTextActive: {
    fontWeight: "500",
  },
});
