// Partial Libraries Imports
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Full Libraries Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { deleteAlert } from "../../../redux/module/Actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/CombineReducers";

export default (props: { label: string; id: string }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <View style={styles.card}>
      <View style={styles.grid}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.label}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteAlert(user?.token || "", props.id));
          }}
        >
          <FontAwesomeIcon style={styles.icon} size={24} icon={faTrashAlt} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 25,
    marginLeft: 14,
    marginRight: 14,
    paddingTop: 25,
    paddingBottom: 25,
  },
  icon: {
    color: "#E74C3C",
    marginRight: 45,
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
  },
  textContainer: {
    marginLeft: 45,
  },
});
