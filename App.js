import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import LoginScreen from './components/LoginScreen';
import SignInLogIn from './components/SignInLogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SideBar from './components/SideBar';
import DrawerBar from './components/DrawerBar';

const Stack = createStackNavigator();

const App = () => {

  //const [name, setName] = useState('');
  const [isOver, setIsOver] = useState(false);


  /* useEffect(() => {
    const timeouthandle = setTimeout(() => {
      setIsOver(true);
    }, 2000);
    return cleanupTimer = (timeouthandle) => {
      clearTimeout(timeoutHandle);
    }
  }) */

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignInLogIn"
            component={SignInLogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SideBar"
            component={SideBar}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
/* (isOver ?
   :
  <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInLogIn"
          component={SignInLogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SideBar"
          component={SideBar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
  //<LoginScreen />
))
} */
export default App;