// Partial Libraries Imports
import { Button, TextInput, TouchableOpacity, Text, View } from "react-native";
import { withRouter } from "react-router-native";

// Full Libraries Imports
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../app/App';

// Contexts Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

export default ({ navigation } : { navigation : StackNavigationProp<RootStackParamList, 'Login'> }) => {
  const [usernameValue, onChangeUsername] = React.useState("");
  const [passwordValue, onChangePassword] = React.useState("");
  return (
    <View style={{backgroundColor: '#3B3B3B', height:'100%', paddingTop:'100px'}}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesomeIcon
          style={{ color: "#F5DF4D", marginBottom: "100px"}}
          size={152}
          icon={faThermometerHalf}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          textContentType="username"
          placeholder="Username"
          style={{
            height: 40,
            width: '90%',
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: "25px",
            backgroundColor: "#fefefe",
            fontSize: "25px",
            minHeight: "72px",
            paddingLeft: "40px",
            marginBottom: "35px"
          }}
          onChangeText={(text) => onChangeUsername(text)}
          value={usernameValue}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          secureTextEntry={true}
          textContentType="newPassword"
          placeholder="Password"
          style={{
            height: 40,
            width: '90%',
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
      <View  style={{alignItems: 'center'}}>
        <TouchableOpacity
        onPress={() => {
          navigation.push('Home');
          console.log("CLICKED LOGIN BUTTON !");
        }}
          style={{
            width: '90%',
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
};
