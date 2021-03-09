// Partial Libraries Imports
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { RootStackParamList } from "../app/App";

// Redux Imports
import { RootState } from "../redux/CombineReducers";
import { fetchUser } from "../redux/user/Actions";

export default function ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}) {
  const [usernameValue, onChangeUsername] = React.useState("");
  const [passwordValue, onChangePassword] = React.useState("");

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => {
    if (state.user.user) {
      navigation.push("Home");
    }
    return state.user.user;
  });
  const isUserLoading = useSelector(
    (state: RootState) => state.user.isUserLoading
  );
  const isUserError = useSelector((state: RootState) => state.user.isUserError);

  return (
    <View
      style={{
        backgroundColor: "#3B3B3B",
        height: "100%",
        paddingTop: "100px",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesomeIcon
          style={{ color: "#F5DF4D", marginBottom: "100px" }}
          size={152}
          icon={faThermometerHalf}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          textContentType="username"
          placeholder="Username"
          style={{
            height: 40,
            width: "90%",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: "25px",
            backgroundColor: "#fefefe",
            fontSize: "25px",
            minHeight: "72px",
            paddingLeft: "40px",
            marginBottom: "35px",
          }}
          onChangeText={onChangeUsername}
          value={usernameValue}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          secureTextEntry={true}
          textContentType="newPassword"
          placeholder="Password"
          style={{
            height: 40,
            width: "90%",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: "25px",
            backgroundColor: "#fefefe",
            fontSize: "25px",
            minHeight: "72px",
            paddingLeft: "40px",
            marginBottom: "45px",
          }}
          onChangeText={onChangePassword}
          value={passwordValue}
        />
      </View>
      <View style={{ alignItems: "center", marginBottom: "15px" }}>
        {isUserError && !user && (
          <Text style={{ fontSize: "22px", color: "#FF0000" }}>
            Bad credentials.
          </Text>
        )}
      </View>
      <View style={{ alignItems: "center" }}>
        {!isUserLoading ? (
          <TouchableOpacity
            style={{
              width: "90%",
              borderRadius: "25px",
              minHeight: "50px",
              backgroundColor: "#F5DF4D",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={!usernameValue || !passwordValue || isUserLoading}
            onPress={() => {
              dispatch(fetchUser(usernameValue, passwordValue));
            }}
          >
            <Text style={{ fontSize: "22px", color: "#FFFFFF" }}>Login</Text>
          </TouchableOpacity>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
}
