import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SideBar from '../SideBar';
import FreeDiscipline from '../FreeDiscipline';
import Application from '../Application';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName='SideBar'
    >
      <Stack.Screen name="SideBar" component={SideBar} options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="FreeDiscipline" component={FreeDiscipline} options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="Application" component={Application} options={{
              headerShown: false,
            }}/>
    </Stack.Navigator>
  )
}

export default StackNav;