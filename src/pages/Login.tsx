// Partial Libraries Imports
import { StackNavigationProp } from "@react-navigation/stack";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { RootStackParamList } from "../app/App";

// Redux Imports
import { RootState } from "../redux/CombineReducers";
import { fetchUser } from "../redux/user/Actions";

// Environment Imports
import { ENVIRONMENT } from "../../env.json";

export default function ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}) {
  const [usernameValue, onChangeUsername] = React.useState(
    ENVIRONMENT === "dev" ? "User1" : ""
  );
  const [passwordValue, onChangePassword] = React.useState(
    ENVIRONMENT === "dev" ? "Azerty@123" : ""
  );

  const dispatch = useDispatch();

  const isUserLoading = useSelector(
    (state: RootState) => state.user.isUserLoading
  );

  const isUserError = useSelector((state: RootState) => state.user.isUserError);

  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.logoSmartyz}
        source={{
          uri: 'https://i.imgur.com/ii1XQ7l.png',
        }}
      />
      <Text style={styles.caption}>
        By Algeco
      </Text>
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
            dispatch(fetchUser(usernameValue, passwordValue, navigation));
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
    alignItems: "center",
    backgroundColor: "#3B3B3B",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#FEFEFE",
    borderColor: "gray",
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 22,
    height: 40,
    marginBottom: 35,
    minHeight: 72,
    paddingLeft: 40,
    width: "90%",
  },
  errorMessage: {
    marginBottom: 35,
    color: "#FF0000",
    fontSize: 18,
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#F5DF4D",
    borderRadius: 25,
    justifyContent: "center",
    minHeight: 50,
    width: "90%",
  },
  activityIndicator: {
    minHeight: 50,
  },
  loginButtonText: {
    color: "#3B3B3B",
    fontSize: 22,
  },
  logoSmartyz: {
    width: 170,
    height: 155,
    marginBottom: 100,
  },
  caption: {
    color: "#FFF",
    fontSize: 20,
    marginTop: -100,
    marginBottom: 50
  }
});
