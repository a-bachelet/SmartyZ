// Partial Libraries Imports
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faChevronLeft,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Navigation Imports
import { RootStackParamList } from "../../app/App";
import { ParamListBase } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  editModuleName,
  fetchCurrentModuleAlertsCount,
  fetchCurrentModuleSuccess,
} from "../../redux/module/Actions";
import { RootState } from "../../redux/CombineReducers";

const tabs: (
  currentTab: string,
  tabNavigation: StackNavigationProp<ParamListBase>,
  isCountLoading: boolean,
  count: number
) => JSX.Element[] = (currentTab, tabNavigation, isCountLoading, count) => {
  return ["Status", "Analytics", "Alerts"].map((tab: string) => {
    const active: boolean = tab === currentTab;
    return (
      <Pressable
        key={tab}
        style={[
          styles.link,
          active ? styles.linkActive : {},
          tab === "Alerts" ? styles.linkAlerts : {},
        ]}
        onPress={() => {
          tabNavigation.push(tab);
        }}
      >
        <Text style={[styles.linkText, active ? styles.linkTextActive : {}]}>
          {tab}
        </Text>
        {tab === "Alerts" && count > 0 && (
          <View style={styles.alertsCircle}>
            {isCountLoading ? (
              <ActivityIndicator color="#F5DF4D" />
            ) : (
              <Text style={styles.alertsCircleText}>{count}</Text>
            )}
          </View>
        )}
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
  id: string;
}) {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCurrentModuleAlertsCount(user.token, props.id));
    }
  }, []);

  const alertsCount = useSelector(
    (state: RootState) => state.module.currentModuleAlertsCount
  );

  const isAlertsCountLoading = useSelector(
    (state: RootState) => state.module.isCurrentModuleAlertsCountLoading
  );

  const isEditingModuleNameLoading: boolean = useSelector(
    (state: RootState) => state.module.isEditingModuleNameLoading
  );

  const [editing, setEditing] = useState(false);
  const [nameValue, setNameValue] = useState(props.name);
  const [ac, setAc] = useState(alertsCount);
  const [iacl, setIacl] = useState(isAlertsCountLoading);

  useEffect(() => {
    setAc(alertsCount);
  }, [alertsCount]);

  useEffect(() => {
    setIacl(isAlertsCountLoading);
  }, [isAlertsCountLoading]);

  const toggleEditing = () => {
    if (editing && nameValue !== props.name) {
      dispatch(editModuleName(user?.token || "", props.id, nameValue));
    }
    setEditing(!editing);
  };

  const goBack = () => {
    dispatch(fetchCurrentModuleSuccess(null));
    props.rootNavigation.goBack();
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.topMenuContainer}>
          <Pressable onPress={goBack}>
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
              isEditingModuleNameLoading ? (
                <ActivityIndicator color="#F5DF4D" />
              ) : (
                <Text style={styles.title}>{nameValue}</Text>
              )
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
        <View style={styles.bottomMenuContainer}>
          {tabs(props.tab, props.navigation, iacl, ac)}
        </View>
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
  linkAlerts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alertsCircle: {
    alignItems: "center",
    backgroundColor: "#e74c3c",
    borderRadius: 100,
    height: 15,
    justifyContent: "center",
    marginLeft: 6,
    textAlign: "center",
    width: 15,
  },
  alertsCircleText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});
