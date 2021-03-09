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
  StyleSheet,
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
    <View style={styles.rootContainer}>
      <FontAwesomeIcon
        style={styles.icon}
        size={152}
        icon={faThermometerHalf}
      />
      <TextInput
        textContentType="username"
        placeholder="Username"
        style={styles.input}
        onChangeText={onChangeUsername}
        value={usernameValue}
      />
      <TextInput
        secureTextEntry={true}
        textContentType="newPassword"
        placeholder="Password"
        style={styles.input}
        onChangeText={onChangePassword}
        value={passwordValue}
      />
      <Text style={[styles.errorMessage, { opacity: isUserError ? 1 : 0 }]}>
        Bad credentials.
      </Text>
      {!isUserLoading ? (
        <TouchableOpacity
          style={styles.loginButton}
          disabled={!usernameValue || !passwordValue || isUserLoading}
          onPress={() => {
            dispatch(fetchUser(usernameValue, passwordValue));
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator color="#F5DF4D" style={styles.activityIndicator} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3B3B3B",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#F5DF4D",
    marginBottom: "100px",
  },
  input: {
    backgroundColor: "#FEFEFE",
    borderColor: "gray",
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 22,
    height: 40,
    marginBottom: "35px",
    minHeight: "72px",
    paddingLeft: "40px",
    width: "90%",
  },
  errorMessage: {
    marginBottom: "35px",
    color: "#FF0000",
    fontSize: 18,
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#F5DF4D",
    borderRadius: 25,
    justifyContent: "center",
    minHeight: "50px",
    width: "90%",
  },
  activityIndicator: {
    minHeight: "50px",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
