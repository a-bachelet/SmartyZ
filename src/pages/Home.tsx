// Partial libraries Imports
import { StackNavigationProp } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// Full Libraries Imports
import React, { useEffect, useState } from "react";
import Module from "../components/home/Module";

// Redux Types Imports
import { RootState } from "../redux/CombineReducers";

// Redux Actions Imports
import { fetchModuleList } from "../redux/module/Actions";
import { logoutUser } from "../redux/user/Actions";

// Navigation Imports
import { RootStackParamList } from "../app/App";

export default function ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const moduleList = useSelector((state: RootState) => state.module.moduleList);

  const isModuleListLoading = useSelector(
    (state: RootState) => state.module.isModuleListLoading
  );
  const isModuleListError = useSelector(
    (state: RootState) => state.module.isModuleListError
  );

  const [moduleListToDisplay, setModuleListToDisplay] = useState<JSX.Element[]>(
    []
  );

  useEffect(() => {
    if (user) {
      dispatch(fetchModuleList(user.token));
    }
  }, []);

  useEffect(() => {
    setModuleListToDisplay(
      moduleList.map((module) => (
        <Module
          key={module.id}
          module={module}
          navigation={navigation}
        ></Module>
      ))
    );
  }, [moduleList]);

  const logout = () => {
    dispatch(logoutUser(navigation));
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.title}>
        <View style={styles.paddedView} />
        <Text style={styles.titleText}>{user?.name}</Text>
        <Pressable onPress={logout}>
          <FontAwesomeIcon
            style={styles.logoutButton}
            size={25}
            icon={faSignOutAlt}
          />
        </Pressable>
      </View>
      <View style={styles.moduleList}>
        {isModuleListError ? (
          <Text style={styles.errorMessage}>An error occured</Text>
        ) : (
          <></>
        )}
        {isModuleListLoading ? (
          <ActivityIndicator
            color="#F5DF4D"
            style={styles.activityIndicator}
          ></ActivityIndicator>
        ) : (
          moduleListToDisplay
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3B3B3B",
    height: "100%",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
  },
  titleText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 24,
  },
  moduleList: {
    marginTop: "",
    height: "calc(100% - 80px)",
    paddingTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FEFEFE",
  },
  activityIndicator: {
    alignSelf: "center",
    minHeight: 50,
  },
  errorMessage: {
    alignSelf: "center",
    color: "#FF0000",
    fontSize: 18,
  },
  logoutButton: {
    paddingRight: 10,
    color: "#F5DF4D",
  },
  paddedView: {
    paddingLeft: 50,
  },
});
