// Partial Libraries Imports
import { Button, TextInput, TouchableOpacity, Text, View } from "react-native";
import { withRouter } from "react-router-native";

// Full Libraries Imports
import React from "react";

// Contexts Imports
import { AuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

export default withRouter(({ history }) => {
  const [usernameValue, onChangeUsername] = React.useState("");
  const [passwordValue, onChangePassword] = React.useState("");
  return (
    // <AuthContext.Consumer>
    //   {({ auth, toggleAuth }) => (

    //     <Button
    //       onPress={() => {
    //         toggleAuth();
    //         history.push("/");
    //       }}
    //       title="Login"
    //     />
    //   )}

    // </AuthContext.Consumer>
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesomeIcon
          style={{ color: "#F5DF4D", marginBottom: "115px" }}
          size={152}
          icon={faThermometerHalf}
        />
      </View>
      <View>
        <TextInput
          textContentType="username"
          placeholder="Username"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: "25px",
            backgroundColor: "#fefefe",
            fontSize: "25px",
            minHeight: "72px",
            paddingLeft: "40px",
            marginBottom: "35px",
          }}
          onChangeText={(text) => onChangeUsername(text)}
          value={usernameValue}
        />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          textContentType="newPassword"
          placeholder="Password"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: "25px",
            backgroundColor: "#fefefe",
            fontSize: "25px",
            minHeight: "72px",
            paddingLeft: "40px",
            marginBottom: "45px",
          }}
          onChangeText={(text) => onChangePassword(text)}
          value={passwordValue}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderRadius: "25px",
            minHeight: "50px",
            backgroundColor: "#F5DF4D",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "22px", color: "#FFFFFF" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
