import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import LoginScreen from "./components/LoginScreen";
import SignInLogIn from "./components/SignInLogIn";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerBar from "./components/DrawerBar";
import { Font } from "expo";
import * as Fonty from "expo-font";
import { AppLoading } from "expo";

const Stack = createStackNavigator();

const App = () => {
  //const [name, setName] = useState('');
  //const [isOver, setIsOver] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  /* useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      setIsOver(true);
    }, 2000);
    return cleanupTimer = (timeoutHandle) => {
      clearTimeout(timeoutHandle);
    }
  }) */

  return (
    <>
      <StatusBar />
      {isAuthorized ? (
        <DrawerBar />
      ) : (
        <SignInLogIn setIsAuthorized={setIsAuthorized} />
      )}
    </>
  );
};

export default App;
