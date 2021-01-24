import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './components/LoginScreen';
import SignInLogIn from './components/SignInLogIn';
import { createStackNavigator } from '@react-navigation/stack';
import SideBar from './components/SideBar';
import DrawerBar from './components/DrawerBar';

const Stack = createStackNavigator();

const App = () => {

  //const [name, setName] = useState('');
  //const [isOver, setIsOver] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);

  /* useEffect(() => {
    const timeouthandle = setTimeout(() => {
      setIsOver(true);
    }, 2000);
    return cleanupTimer = (timeouthandle) => {
      clearTimeout(timeoutHandle);
    }
  }) */

  return (
    <>
      <StatusBar />
      {isAuthorised ?
        <DrawerBar /> :
        <SignInLogIn setAuthorised={setIsAuthorised} />
      }
    </>
  )
}

export default App;