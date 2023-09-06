import React, { useState } from "react";
import {
  Text,
  TextInput,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({ setToken }) {}
const [Username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [errorMessage, setErrorMessage] = useState;
const navigation = useNavigation();

const handleSignIn = async () => {
  try {
    const { data } = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
      {
        email,
        username,
      }
    );

    console.log("data>>>", data);
    setToken(data.token);
  } catch (error) {
    console.log(error.response);
    setErrorMessage(
      "Vous avez saisi un mauvais e-mail ou mot de passe ! Si vous n'avez pas de compte, inscrivez-vous"
    );
  }

  return (
    <KeyboardAwareScrollView>
      <View>
        <View>
          <Text> Name: </Text>
          <TextInput placeholder="Username" />
          <Text>Password: </Text>
          <TextInput placeholder="Password" secureTextEntry={true} />
          <Button
            title="Sign in"
            onPress={async () => {
              const userToken = "secret-token";
              setToken(userToken);
            }}
          />
          <TouchableOpacity
            onPress={(handleSignIn) => {
              navigation.navigate("SignUp");
            }}
          >
            <Text>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
