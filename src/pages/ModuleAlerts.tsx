// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";

// Full Libraries Imports
import React, { useEffect, useState } from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";
import Alert from "../components/module/alerts/Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/CombineReducers";
import { fetchCurrentModuleAlerts } from "../redux/module/Actions";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Alerts">;
}) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const currentModuleAlerts = useSelector((state: RootState) => {
    return state.module.currentModuleAlerts;
  });

  const [alerts, setAlerts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (user) {
      dispatch(
        fetchCurrentModuleAlerts(user.token, props.route.params.module.id)
      );
    }
  }, []);

  useEffect(() => {
    setAlerts(
      currentModuleAlerts.map((a) => (
        <Alert key={a.id} id={a.id} label={a.label} />
      ))
    );
  }, [currentModuleAlerts]);

  return <View>{alerts}</View>;
};
